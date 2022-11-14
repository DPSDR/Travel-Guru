import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import fb from '../../../images2/icons/fb.png';
import google from '../../../images2/icons/google.png';

const SocialLogin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    return (
        <div className='text-center'>
            <button
                className='btn btn-light border border-info rounded-4 mb-2' style={{ width: '350px' }}>
                <img style={{ width: '37px', height: '37px' }} className='float-start' src={fb} alt="" />
                Continue with Facebook
            </button>

            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-light border border-info rounded-4 mb-4' style={{ width: '350px' }}>
                <img style={{ width: '37px', height: '37px' }} className='float-start' src={google} alt="" />
                Continue with Google
            </button>
        </div >
    );
};

export default SocialLogin;