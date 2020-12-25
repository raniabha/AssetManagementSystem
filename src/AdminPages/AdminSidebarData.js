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
    title: 'Asset List',
    path: '/asset',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title:'Request List',
    path: '/requestlist',
    icon: <GoIcons.GoRequestChanges />,
    cName: 'nav-text'
  },
  {
    title: 'Assigned Asset',
    path: '/assignedasset',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title:'Add Asset',
    path: '/addasset',
    // path: {pathname: "/asset", isadd: true},
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'View Profile',
    path: '/setting',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
  
];
