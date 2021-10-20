import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useService from '../../hooks/useService';
import { services } from '../../data';
import './Details.css'
export const handleDetails = (service) => {

}
const Details = () => {
    const { serviceId } = useParams();
    // const services = useService();

    console.log('Details theke:', services);
    const service = services.find(item => item.id == serviceId);
    console.log('single Details theke:', service, typeof (service));
    const { id, service_name, img_url, description, details, count } = service;
    // console.log(fee, service_name)
    return (
        <div className="row py-3 m-0">
            <div className="col col-12 col-md-6 col-lg-4 mx-auto border p-3">
                <img className="img-fluid" src={img_url} alt="" />
                <h2>Service Name: {service_name}</h2>
                <h5>Catagory: {description}</h5>
                <h6>Service Provided: {count}</h6>
                <div className="detail">

                    <p>Details: {details}</p>
                    <button className="btn-menual">Book Service</button>
                </div>
            </div>
        </div>
    );

};

export default Details;