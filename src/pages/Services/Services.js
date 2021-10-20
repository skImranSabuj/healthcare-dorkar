import React from 'react';
import useService from '../../hooks/useService';
import Service from '../Service/Service';
import './Services.css'

const Services = (props) => {
    const services = useService();
    return (
        <div className="py-5 services">
            <h2 className="fw-bold">WHAT SPECIAL IN OUR SERVICES</h2>
            <p>We provide the best services for your health</p>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        handleBooking={props.handleBooking}
                        service={service}></Service>)

                }
            </div>
        </div>
    );
};

export default Services;