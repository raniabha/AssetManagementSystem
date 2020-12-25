// import axios from "axios";
import React, { Component } from 'react';
import {Container, Table, Alert } from 'react-bootstrap';
import AdminHome from '../adminHome';

class AssignedAsset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      assets: [],
      response: {}
    }
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:3001/assets/getAssignedAsset';
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
          <h2 style={{textAlign:"center"}}>Assigned Asset List</h2>
          {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
          <Table striped bordered hover>
            <thead class="thead-dark text-center">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Manager</th>
                <th>Quantity</th>
                <th>Employee</th>
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
export default AssignedAsset;

