import axios from "axios";
import React, { Component } from 'react';
import {Container, Table, Button, Alert } from 'react-bootstrap';
import Home from '../../home/Home';

class RequestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      assets: [],
      filteredAsset: [],
      visible : false,
      response: {}
    }
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

  componentDidMount() {
    axios
      .get('http://localhost:3001/assets/getAllRequest')
      .then(result => {
        let localassset;
        if(this.props.location.status){
          localassset = result.data.assets.filter(asset => asset.status === this.props.location.status)
        }else{
          localassset = result.data.assets.filter(asset => asset.status === "pending")
        }
        this.setState({
          assets: result.data.assets,
          filteredAsset: localassset
              })
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  approveAsset(asset){
    const { assets } = this.state;
    const data = {
      req_id: asset.req_id,
      asset_id: asset.asset_id,
      pending: Number(asset.pending) - Number(asset.req_quantity),
      assigned: Number(asset.assigned) + Number(asset.req_quantity)
    }
    if (window.confirm('Are you sure to accept this request?')) {
        axios
          .post('http://localhost:3001/assets/acceptRequest', data)
          .then(res => {
            this.setState({
              response: res.data,
              assets: assets.filter(asst => asst.req_id !== asset.req_id)
            });
            this.onShowAlert()
          })
          .catch(err => {
              this.setState({ err })
              console.error(err);
          });
    }
  }

  rejectAsset(asset) {
    const { assets } = this.state;
    const data = {
      req_id: asset.req_id,
      asset_id: asset.asset_id,
      pending: Number(asset.pending) - Number(asset.req_quantity)
    }
    if (window.confirm('Are you sure to reject this request?')) {
      axios
        .post('http://localhost:3001/assets/rejectRequest', data)
        .then(res => {
          this.setState({
            response: res.data,
            assets: assets.filter(asst => asst.req_id !== asset.req_id)
          });
          this.onShowAlert()
        })
        .catch(err => {
            this.setState({ err })
            console.error(err);
        });
    }
  }

  filterStatus = (status) => {
    // alert("called")
    this.setState({
        filteredAsset: this.state.assets.filter(asset => asset.status === status)
    })
  }

  render() {
    const { error, filteredAsset} = this.state;
    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <>
        <Home/>
        <Container>
        <div>
          {this.state.response.status === 'success' && this.state.visible && <div><br />
          <Alert  variant="ixnfo" isOpen={this.state.visible}>{this.state.response.message}</Alert></div>}

          <h2 style={{display: "inline-block", float: "right"}}>Request Status </h2>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success" onClick={() => this.filterStatus("assigned")}>Assigned</button>
            <button type="button" class="btn btn-danger" onClick={() => this.filterStatus("rejected")}>Rejected</button>
            <button type="button" class="btn btn-info" onClick={() => this.filterStatus("pending")}>Pending</button>
          </div>
          <Table striped bordered hover>
            <thead class="thead-dark text-center">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Manager</th>
                <th>Quantity</th>
                <th>Employee</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="text-center">
              {filteredAsset.map(asset => (
                <tr key={asset.req_id}>
                  <td>{asset.title}</td>
                  <td>{asset.category}</td>
                  <td>{asset.manager}</td>
                  <td>{asset.req_quantity}</td>
                  <td>{asset.employee}</td>
                  <td>
                    {asset.status === 'assigned' && <p class="text-success">{asset.status}</p>}
                    {asset.status === 'rejected' && <p class="text-danger">{asset.status}</p>}
                    {asset.status === 'pending' && 
                      <Button variant="info" onClick={() => this.approveAsset(asset)}>Approve</Button>
                    }&nbsp;{asset.status === 'pending' && 
                      <Button variant="danger" onClick={() => this.rejectAsset(asset)}>Reject</Button>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        </Container>
        </>
      )
    }
  }
}
export default RequestList;

