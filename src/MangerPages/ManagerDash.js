import { Button} from 'react-bootstrap'
import ManagerHome from './ManagerHome';


import React, { Component } from 'react'


export default class ManagerDashbord extends Component {
render() {
  return (
  <>    
     <ManagerHome/>
        {/* <div class="container">
          <div class="row">
          <div class="col-sm-12 col-md-4">
            <div class="custom-column">
              <div class="custom-column-header">Assets</div>
              <div class="custom-column-content">
                  
              </div>
              <div  class="custom-column-footer" ><Button href="/assetlist" class="btn bg-transparent">View All</Button></div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="custom-column">        
              <div class="custom-column-header">Request Status</div>
              <div class="custom-column-content"></div>
              <div class="custom-column-footer"><Button  href="/status" class="btn bg-transparent">View All</Button></div>
              </div>
            </div>
          </div>
        </div> */}
      </>
    )
  }
}
