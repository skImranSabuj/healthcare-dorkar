import React from 'react';
import { Row } from 'react-bootstrap';
import './Covid.css';

const Covid = () => {
    return (
        <div>
            <div className="covid row bg-info">
                <div className="covid-info col-md-4">
                    <h1>Total Case</h1>
                </div>
                <div className="covid-info col-md-4">
                    <h1>Total Vaccinated</h1>
                </div>
                <div className="covid-info col-md-4">
                    <h1>Total Death</h1>
                </div>
            </div>
        </div>
    );
};

export default Covid;