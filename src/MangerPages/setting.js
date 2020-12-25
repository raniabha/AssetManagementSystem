import axios from "axios";
import React, { Component } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';

class AssetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      assets: [],
      response: {}
    }
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:3001/assets';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            assets: result.assets
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
    
  }

  deleteAsset(id) {
    const { assets } = this.state;
    if (window.confirm('Are you sure to delete this record?')) {
        axios
            .delete(`http://localhost:3001/assets/${id}`)
            .then(res => {
                this.setState({
                    response: res.data,
                    assets: assets.filter(asset => asset.id !== id)
                  });
                // alert(res.data.message);
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
        <div>
          <h2>Asset List</h2>
          {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Price</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assets.map(asset => (
                <tr key={asset.id}>
                  <td>{asset.title}</td>
                  <td>{asset.category}</td>
                  <td>{asset.quantity}</td>
                  <td>{asset.price}</td>
                  <td>{asset.total_price}</td>
                  <td>{asset.details}</td>
                  <td>
                      <Button variant="info" onClick={() => this.props.editAsset(asset.id)}>Edit</Button>
                      &nbsp;<Button variant="danger" onClick={() => this.deleteAsset(asset.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )
    }
  }
}

export default AssetList;

