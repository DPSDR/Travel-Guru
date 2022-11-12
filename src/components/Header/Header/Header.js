import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header container mt-3'>
            <Link to='/'><img style={{ width: '120px' }} src='/images/logo.png' alt="" /></Link>
            <input className='form-control d-inline border rounded p-2 mx-2 input_style' type="text" name="gsearch" id="gsearch" placeholder="&#xf007; Search Your Destination" />
            <Link to='/news'>News</Link>
            <Link to='/destination'>Destination</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/blog'>Blog</Link>
            <Link><button className='btn btn-warning py-2 px-4 fw-semibold'>Login</button></Link>
        </div>
    );
};

export default Header;
