import React, { Component } from 'react'
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Home.css';
import NavHeader from './navheader';


export default class Home extends Component {
  Showsidebar = (item, index) => {
    return (
      <li key={index} className="nav-text">
        <Link to={item.path}>{item.icon}<span>{item.title}</span></Link>
        {/* <Link to={{pathname: item.path, isadd: item.isadd}}>{item.icon}<span>{item.title}</span></Link> */}
      </li>
    );
  }

  render() {
    return (
      <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='nav-menu active'>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <NavHeader/>
            </li>
            <li className='nav-text'>
              <div>
              {sessionStorage.getItem("role") === "admin" &&
                <img alt='Profile Pic' src='https://am.techjockey.com/assets/img/demo/profile-pics/anonymous.png' className='left_user_img'/>
              }
              {sessionStorage.getItem("role") === "user" &&
                <img alt='Profile Pic' src='https://am.techjockey.com/assets/img/demo/profile-pics/anonymous.png' className='left_user_img1'/>
              }
              <font className='left_user_info'>
                  {sessionStorage.getItem("username")}
                  {sessionStorage.getItem("role") === "admin" && <br/>}
                  {sessionStorage.getItem("role") === "admin" && <span>Admin</span>}
                  
                </font>
              </div>
            </li>
            {SidebarData.map((item, index) => this.Showsidebar(item, index))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
    )
  }
}


