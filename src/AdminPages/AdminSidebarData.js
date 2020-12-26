import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GoIcons from 'react-icons/go';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/adminhome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Assets',
    path: '/asset',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title:'Requests',
    path: '/requestlist',
    icon: <GoIcons.GoRequestChanges />,
    cName: 'nav-text'
  },
  {
    title: 'Assigned',
    path: '/assignedasset',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/setting',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
  
];
