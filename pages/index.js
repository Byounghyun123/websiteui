import React from 'react';

// INTERNAL IMPORT
import Style from '../styles/index.module.css';
import {
    HomePage,
} from '../components/componentsindex';

const index = () => {
  return (
    <div className={Style.index}>
        <HomePage />
    </div>
  )
};

export default index;