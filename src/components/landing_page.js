import React from 'react';
import header from '../assets/images/landing/header.png';

export default props =>{
    return(
        <div className='header-img'id="landing">
        <img src={header} alt="header img"/>
        </div>
    );
}