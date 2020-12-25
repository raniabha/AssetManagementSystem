import React, { Component } from 'react';
import axios from 'axios';
import './Assets.css';
import { Container, Alert } from 'react-bootstrap';
import AssetForm from './AssetForm';
import AdminHome from '../adminHome';

class AddAsset extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      error: null,
      visible : false,
      response: {},
      asset: {},
      
    }
  }

  onCancel = () => {
    this.props.history.push('/asset')
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
        })
        this.onShowAlert()
        this.props.history.push('/asset')
      })
     
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    
    return (
      <>
      <AdminHome/>
      <div className="App">
        <Container>
          {this.state.response.status === 'success' && this.state.visible && <div><br /><Alert  variant="info" isOpen={this.state.visible}>{this.state.response.message}</Alert></div>}
          <AssetForm onFormSubmit={this.onFormSubmit} asset={this.state.asset} onCancel={this.onCancel}/>
        </Container>
      </div>
      </>
    );
  }
}
export default AddAsset;
