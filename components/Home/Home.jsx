import React from 'react';

// INTERNAL IMPORT
import Style from './Home.module.css';

const Home = () => {
  return (
    <div className={Style.Home_parent}>
        <div className={Style.Home}>
            <div className={Style.Home_title}>
                Welcome Back, Kevin!
            </div>
        </div>
    </div>
  )
};

export default Home;