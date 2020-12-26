
import React, { Component } from 'react';
import axios from 'axios';
import { Container,  Alert } from 'react-bootstrap';
import AvailableAsset from './AvailableAsset';
import RequestForm  from './RequestForm';
import Home from '../../home/Home';

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditAsset: false,
      response: {},
      asset: {},
      visible : false,
      error: null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  requestAsset = asset => {
    this.setState({
      asset: asset,
      isEditAsset: true
    })
  }

  onCancel = ()=>{
    this.setState({
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

  onFormSubmit(data) {
    axios
      .post('http://localhost:3001/assets/requestAsset', data)
      .then(result => {
        this.setState({
          response: result.data,
          isEditAsset: false,
          asset: {}
        })
        this.onShowAlert()
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    let requestForm_OR_availablelist;
    if( this.state.isEditAsset) {
      requestForm_OR_availablelist = <RequestForm  onFormSubmit={this.onFormSubmit} asset={this.state.asset} onCancel={this.onCancel}/>
    }else{
      requestForm_OR_availablelist = <AvailableAsset requestAsset={this.requestAsset}/>
    }
    return (
    <>
      <Home/>
      <div className="App">
        <Container>
          {this.state.response.status === 'success' && this.state.visible && <div><br /><Alert variant="info">{this.state.response.message}</Alert></div>}
          {requestForm_OR_availablelist}
        </Container>
      </div>
    </>
    );
  }
}
export default Assets;
