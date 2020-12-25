import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './ManagerSidebarData';
import './ManagerHome.css';
import { IconContext } from 'react-icons';
import NavHeader from '../components/navheader';

function ManagerHome() {

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
                <img alt='Profile Pic' src='https://am.techjockey.com/assets/img/demo/profile-pics/anonymous.png' className='left_user_img1'/>
                <font className='left_user_info1'>
                  {sessionStorage.getItem("username")}
                  {/* <br/> */}
                  {/* <span>Admin</span> */}
                </font>
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>{item.icon}<span>{item.title}</span></Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default ManagerHome;
