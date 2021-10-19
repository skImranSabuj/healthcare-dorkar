import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

const Service = (props) => {
    const { id, service_name, img_url, description, fee } = props.service;
    return (
        <div>
            <div className="cards">
                <div className="photo mt-2">
                    <img className="img-fluid" src={img_url} alt="" />
                </div>
                <h3>ID: {id}</h3>
                <p>{service_name}</p>
                <h6> Cost:<span className="fw-normal"> ${Math.round(fee)}</span></h6>
                <p>{description} </p>
                <button onClick={() => props.handleBooking(props.person)} className="btn btn-warning text-dark fw-bold my-3"> Details</button>
            </div>
        </div>
    );
};

export default Service;