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
    title: 'Assets',
    path: '/assetlist',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title:'Status',
    path: '/status',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/managersetting',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
