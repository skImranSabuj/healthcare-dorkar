import React from 'react';
import { Link } from 'react-router-dom';
import imgComing from '../../images/coming-soon-page-removebg-preview.png'
const ComingSoon = () => {
    return (
        <div className="py-5">
            <img className="w-50 rounded rounded-3 pb-2" src={imgComing} alt="" /> <br />
            <Link to="/services" className="m-2">
                <button className="btn-menual">Back to Service</button>
            </Link>
            <Link to="/home">
                <button className="btn-menual">Back to home</button>
            </Link>
        </div>
    );
};

export default ComingSoon;