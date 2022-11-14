import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        console.log(user)
    }
    if (error) {
        console.error(error)
    }

    return (
        <div>
            <div style={{ width: '570px', height: '450px', marginTop: '2rem' }} className='container mx-auto' >
                <Form onClick={handleLogin} className='bg-white py-5 px-5 border border-info rounded-3'>
                    <h3 className='fw-bolder'>Create an accont</h3>
                    <Form.Group className="mb-3 mt-4" >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label>Username or Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <Button className='w-100 btn btn-warning' variant="primary" type="submit">
                        Create an account
                    </Button>
                    <p className='text-center mt-3 mb-0'>Already an accont? <Link className='text-warning' to='/login'>Login</Link> </p>
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

export default Register;