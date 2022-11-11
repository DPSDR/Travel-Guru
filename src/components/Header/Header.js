import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <Link to='/'><img src={logo} alt="" /></Link>
            <input type="search" name="gsearch" id="gsearch" />
        </div>
    );
};

export default Header;