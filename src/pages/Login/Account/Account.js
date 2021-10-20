import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Account = () => {
    const { user } = useAuth();
    return (
        <div className="login-form mx-auto p-5 my-5">
            {user.photoURL ? <img className="img-fluid" src={user.photoURL} alt="" /> : <img className="img-fluid" src="https://i.ibb.co/WW86KcV/doctor-bg.png" alt="" />}
            <h3 className="text-primary pt-3">{user?.displayName}</h3>
            {user.email ? <h6>Email:{user.email}
            </h6> : <Link to="/login">
                <button className="btn-menual">Login</button></Link>}
        </div>
    );
};

export default Account;