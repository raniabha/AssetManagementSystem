import axios from "axios";
import React, { Component } from 'react';
import {Container, Table, Button, Alert } from 'react-bootstrap';
import AdminHome from '../adminHome';

class RequestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      assets: [],
      response: {}
    }
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:3001/assets/getAllRequest';
    fetch(apiUrl)
      .then(res => res.json())
      .then((result) => {
          this.setState({
            assets: result.assets
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
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
        })
        .catch(err => {
            this.setState({ err })
            console.error(err);
        });
    }
  }

  render() {
    const { error, assets} = this.state;
    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <>
        <AdminHome/>
        <Container>
        <div>
          <h2 style={{textAlign:"center"}}>Request List</h2>
          {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
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
              {assets.map(asset => (
                <tr key={asset.req_id}>
                  <td>{asset.title}</td>
                  <td>{asset.category}</td>
                  <td>{asset.manager}</td>
                  <td>{asset.req_quantity}</td>
                  <td>{asset.employee}</td>
                  <td>
                      <Button variant="info" onClick={() => this.approveAsset(asset)}>Approve</Button>
                      &nbsp;<Button variant="danger" onClick={() => this.rejectAsset(asset)}>Reject</Button>
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

