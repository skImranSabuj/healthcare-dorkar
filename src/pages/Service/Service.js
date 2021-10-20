import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import './Service.css'

// const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

const Service = (props) => {
    const { id, service_name, img_url, description } = props.service;
    return (
        <div>
            <div className="cards">
                <div className="photo">
                    <img className="img-fluid" src={img_url} alt="" />
                </div>
                <h3>{service_name}</h3>
                <p>{description} </p>
                <Link to={`/details/${id}`}>
                    <button className="btn btn-menual">More Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;