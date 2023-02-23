import React from 'react'
import logo from '../assets/logo.svg'
export const Loader = () => {
    return (
        <div className="loading">
             <img src={logo} alt="Logo" className="home-logo-loader "/>
        </div>
    );
}