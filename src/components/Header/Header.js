import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
            <img className='logo' src={logo} alt="" />
                <div>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/about">About</a>
                </div>
            </nav>
            <div className="header-title">
                <h1 className='main-header'>Hey Welcome to Watchify!!!</h1>
                <h4 className='side-header'>Where you can find any kinds of Premium Watches.</h4>
                <h5 className='side-header'>Let's choose your watch!!</h5>
            </div>
        </div>
    );
};

export default Header;