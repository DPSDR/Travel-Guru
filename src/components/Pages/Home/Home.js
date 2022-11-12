import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className='w-50 text-white text-start home-intro'>
                <h1>COX'S BAZAR</h1>
                <p className='mt-3'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <button className="btn btn-warning px-4 my-3 fw-bolder">
                    Booking
                </button>
            </div>
            <div className=''></div>
        </div >
    );
};

export default Home;