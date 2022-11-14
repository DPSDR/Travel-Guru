import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Destination.css'

const Destination = () => {
    return (
        <div>
            <Container>
                <Row className='gx-5'>
                    <Col lg={6} sm={12}>
                        <div className='text-start home-intro'>
                            <h1 className='text-white'>COX'S BAZAR</h1>
                            <p className='mt-3 text-white text-opacity-75'>Cox's Bazar is a town on the southeast coast of Bangladesh. It's known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} className='bg-white border rounded destination-container p-2'>
                        <div className='text-start px-3'>
                            <label className='fs-6 mt-3 text-secondary' htmlFor="text">Origin</label><br />
                            <input type='text' placeholder='Dhaka'
                                className='form-control fw-bold mt-2 text-black' />
                        </div>
                        <div className='text-start px-3 pt-3'>
                            <label className='fs-6 mt-3 text-secondary' htmlFor="text">Destination</label><br />
                            <input type='text' placeholder="Cox's Bazar"
                                className='form-control fw-bold mt-2 text-black' />
                        </div>
                        <Row>
                            <Col>
                                <div className='text-start px-3 pt-3'>
                                    <label className='fs-6 mt-3 text-secondary' htmlFor="text">From</label><br />
                                    <input type="date" className='form-control mt-2 fw-bold' />
                                </div>
                            </Col>
                            <Col>
                                <div className='text-start px-3 pt-3'>
                                    <label className='fs-6 mt-3 text-secondary' htmlFor="text">To</label><br />
                                    <input type="date" className='form-control mt-2 fw-bold' />
                                </div>
                            </Col>
                        </Row>
                        <div className='p-3 mt-2'>
                            <button className='btn btn-warning w-100'>Start Booking</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Destination;