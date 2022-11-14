import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
    }

    return (
        <div>
            <div style={{ width: '570px', height: '450px', marginTop: '2rem' }} className='container mx-auto' >
                <Form onClick={handleLogin} className='bg-white py-5 px-5 rounded-3'>
                    <h3 className='fw-bolder'>Login</h3>
                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label>Username or Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex justify-content-lg-between" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                        <p style={{ cursor: 'pointer' }} className='text-warning text-decoration-underline'>Forget Password</p>
                    </Form.Group>
                    <Button className='w-100 btn btn-warning' variant="primary" type="submit">
                        Login
                    </Button>
                    <p className='text-center mt-3 mb-0'>Don't have an accont? <Link className='text-warning' to='/register'>Create an account</Link> </p>
                </Form>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='w-25 bg-white' style={{ height: '2px' }}></div>
                    <p className='text-white mt-3 px-3'>or</p>
                    <div className='w-25 bg-white' style={{ height: '2px' }}></div>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;