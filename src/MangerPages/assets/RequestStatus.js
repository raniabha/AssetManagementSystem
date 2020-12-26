
import React, { Component } from 'react';
import {Container, Table, Alert } from 'react-bootstrap';
import Home from '../../home/Home';
import axios from 'axios';

class RequestStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      assets: [],
      filteredAsset: [],
      response: {}
    }
  }
  componentDidMount() {
    axios
      .put(`http://localhost:3001/assets/getRequestStatus/${sessionStorage.getItem("id")}`)
      .then(result => {
        let localassset;
        if(this.props.location.status){
          localassset = result.data.assets.filter(asset => asset.status === this.props.location.status)
        }else{
          localassset = result.data.assets
        }
        this.setState({
          assets: result.data.assets,
          filteredAsset: localassset,
              })
      })
      .catch(error => {
        this.setState({ error });
      });
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
          <h2 style={{display: "inline-block", float: "right"}}>Assets Status </h2>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success" onClick={() => this.filterStatus("assigned")}>Assigned</button>
            <button type="button" class="btn btn-danger" onClick={() => this.filterStatus("rejected")}>Rejected</button>
            <button type="button" class="btn btn-info" onClick={() => this.filterStatus("pending")}>Pending</button>
          </div>
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
              {filteredAsset.map(asset => (
                <tr>
                  <td>{asset.title}</td>
                  <td>{asset.category}</td>
                  <td>{asset.employee}</td>
                  <td>{asset.quantity}</td>
                  {/* <td>{asset.total_price}</td>
                  <td>{asset.details}</td> */}
                  <td>
                    {asset.status === 'pending' && <p class="text-info">{asset.status}</p>}
                    {asset.status === 'assigned' && <p class="text-success">{asset.status}</p>}
                    {asset.status === 'rejected' && <p class="text-danger">{asset.status}</p>}
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
export default RequestStatus;

