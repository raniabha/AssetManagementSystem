import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/userhome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Available Assets',
    path: '/assetlist',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title:'Request Status',
    path: '/status',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title:'Assigned Asset',
    path: '/userassignedasset',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title:'Pending Asset',
    path: '/userpendingasset',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title:'Reject Asset',
    path: '/rejectedasset',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  
  
  {
    title: 'View Profile',
    path: '/managersetting',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
