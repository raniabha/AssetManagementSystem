
import React, { Component } from 'react';
import axios from 'axios';
import './Assets.css';
import { Container, Alert } from 'react-bootstrap';
import AssetList from './AssetList';
import AssetForm from './AssetForm';
import AdminHome from '../adminHome';

// main asset class component for admin
class Asset extends Component {

    // this constructor call first when this component loaded. 
    // the use of state parameter is as follow: 
    // 1.isAddAsset: when this flag is set then Add form will show up and hide assetList
    // 2. is EditAsset: when this flag is set then Edit form will show up and hide assetList
    // 3. error: 
    // 4.visible: when this flag is set then it show up alert.
    // 5. response: it set the server response object
    // 6. asset : this store asset info in edit form(in case of add from this will be empty) 
  constructor(props) {
    super(props);
    this.state = {
      // isAddAsset: props.location.isadd? props.location.isadd: false,
      isAddAsset: false,
      isEditAsset: false,
      error: null,
      visible : false,
      response: {},
      asset: {},
      
    }
  }

  // this method is called  when we click on addAsset button which is in assetlist component
  // it has been pass via props to its assetList child component.
  // this method set isAddAsset flag to true then it will hide the assetList component
  // and will show up assetform component. and it will empty asset 
  onAdd = () => {
    this.setState({ 
      isAddAsset: true,
      asset: {}
    });
  }

  // this method is called  when we click on editAsset button which is in assetlist component
  // it has been pass via props to its assetList child component.
  // this method set isEditAsset flag to true then it will hide the assetList component
  // and will show up assetform component. and it will set asset which come from assetList
  editAsset = assetfromlist => {
    this.setState({ 
      isEditAsset: true,
      asset: assetfromlist
    });
  }
  
  // this method is called when we click on cancel button which is in assetForm component 
  // it has been pass via props to its assetForm child component.
  // this method set isAddAsset & isEditAsset  flag to false then it will hide the assetForm component
  // and will show up assetList component and it will empty asset
  onCancel = () => {
    this.setState({
      isAddAsset: false,
      isEditAsset: false,
      asset: {}
    });
  }
  
  onShowAlert = () =>{
    this.setState({
      visible:true
      },()=>{
      setTimeout(()=>{
        this.setState({
          visible:false
        })
      },1000)
    });
  }

  // this method is called when we click on save button which is in assetForm component
  onFormSubmit = formdata => {
    let apiUrl;
    if(this.state.isEditAsset){
      apiUrl = 'http://localhost:3001/assets/updateAsset';
    } else {
      apiUrl = 'http://localhost:3001/assets';
    }

    axios
      .post(apiUrl,formdata)
      .then(result => {
        this.setState({
          response: result.data,
          isAddAsset: false,
          isEditAsset: false,
        })
        this.onShowAlert()
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    let assetForm_OR_list;
    if(this.state.isAddAsset || this.state.isEditAsset) {
      assetForm_OR_list = <AssetForm onFormSubmit={this.onFormSubmit} asset={this.state.asset} onCancel={this.onCancel}/>
    }else{
      assetForm_OR_list = <AssetList editAsset={this.editAsset} onAdd={this.onAdd}/>
    }
    return (
      <>
      <AdminHome/>
      <div className="App">
        <Container>
          {this.state.response.status === 'success' && this.state.visible && <div><br /><Alert  variant="info" isOpen={this.state.visible}>{this.state.response.message}</Alert></div>}
          {assetForm_OR_list}
          {/* {this.state.error && <div>Error: {this.state.error.message}</div>} */}
        </Container>
      </div>
      </>
    );
  }
}
export default Asset;
