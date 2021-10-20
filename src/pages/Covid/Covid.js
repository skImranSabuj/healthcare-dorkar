import React from 'react';
import { Row } from 'react-bootstrap';
import './Covid.css';

const Covid = () => {
    return (
        <div className="my-3">
            <h2 className="fw-bold">COVID 19 Updates</h2>
            <div className="row d-flex justify-content-center">
                <div className="col covid-info col-md-3 m-1 col-12">
                    <h1>1557347</h1>
                    <h5>Total Case</h5>
                </div>
                <div className="col covid-info col-md-3 m-1 col-12">
                    <h1>55,213,069</h1>
                    <h5>Total Vaccinated</h5>
                </div>
                <div className="col covid-info col-md-3 m-1 col-12">
                    <h1>27555</h1>
                    <h5>Total Death</h5>
                </div>
            </div>
        </div>
    );
};

export default Covid;