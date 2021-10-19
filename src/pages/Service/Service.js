import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Details from '../Details/Details';

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
                <Link to={`/details/${id}`}>
                    <button className="btn btn-warning">{service_name} Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;