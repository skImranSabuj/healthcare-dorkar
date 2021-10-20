import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../images/s2.jpg';
import img2 from '../../images/s3.jpg';
import img3 from '../../images/s4.jpg';
import Services from '../Services/Services';

const Home = () => {
    return (
        <Container className="mt-5">
            <Row className="mb-5">
                <Col sm={6}>
                    <img className="img-fluid w-50" src="https://i.ibb.co/WW86KcV/doctor-bg.png" alt="" />
                    <h1>Welcome to Dorkar!</h1>
                    <Link to="/about">
                        <button className="btn-menual">See More</button>
                    </Link>
                </Col>
                <Col sm={6}><div>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>24 Hour Medicine Services</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Book a doctor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>100% accurate testing</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div></Col>
            </Row>
            <Row>
                <Services></Services>
            </Row>
        </Container>

    );
};

export default Home;