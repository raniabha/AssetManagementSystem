import React, { Component } from 'react';
import {Container, Table, Alert } from 'react-bootstrap';
import ManagerHome from '../ManagerHome';
import axios from 'axios';

class RejectedAsset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      assets: [],
      response: {}
    }
  }
  componentDidMount() {
    axios
      .put(`http://localhost:3001/assets/getRequestStatus/${sessionStorage.getItem("id")}`)
      .then(result => {
          
        this.setState({
                assets: result.data.assets.filter(asset => asset.status === "rejected"),
              })
      })
      .catch(error => {
        this.setState({ error });
      });
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
        <ManagerHome/>
        <Container>
        <div>
          <h2 style={{textAlign:"center"}}>Rejected Asset </h2>
          {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
          <Table striped bordered hover>
            <thead class="thead-dark text-center">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Employee</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody class="text-center">
              {assets.map(asset => (
                <tr>
                  <td>{asset.title}</td>
                  <td>{asset.category}</td>
                  <td>{asset.employee}</td>
                  <td>{asset.quantity}</td>
                  {/* <td>{asset.total_price}</td>
                  <td>{asset.details}</td> */}
                  <td>
                    {/* {asset.status === 'pending' && <p class="text-info">{asset.status}</p>} */}
                    {/* {asset.status === 'assigned' && <p class="text-success">{asset.status}</p>} */}
                    {asset.status === 'rejected' && <p class="text-danger">{asset.status}</p>}
                  </td>
                </tr>
              )
              
              )}
            </tbody>
          </Table>
        </div>
        </Container>
        </>
      )
    }
  }
}
export default RejectedAsset;

