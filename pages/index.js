import React from 'react';

// INTERNAL IMPORT
import Style from '../styles/index.module.css';
import {
  SideBar,
  Home,
} from '../components/componentsindex';

const index = () => {
  return (
    <div className={Style.index}>
        <SideBar />
        <Home />
    </div>
  )
};

export default index;