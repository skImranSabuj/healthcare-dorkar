import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
const signIn = <FontAwesomeIcon icon={faSignInAlt} />

const Register = () => {
    const { user, signInUsingGoogle, handlePassword, handleEmail, handlename, handleRegistration, error } = useAuth();
    return (
        <div className="login-form-container">
            <div className="login-form">
                <h2>Create an account</h2>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handlename} className="form-control" type="text" name="" id="" placeholder="Your Name" />
                    <br />
                    <input onBlur={handleEmail} className="form-control" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="form-control" type="password" name="" id="" placeholder="Your password" />
                    <br />
                    <input onBlur={handlePassword} className="form-control" type="password" name="" id="" placeholder="Confirm password" />
                    <br />
                    <p>{user.email ? '' : <p className="text-danger">{error}</p>}</p> <br />
                    <input className="btn-menual" type="submit" value="Register" />
                </form>
                <p>Have an account? <Link to="/login">Login</Link></p>
                <div>-------or--------</div>
                <button
                    className="btn-menual"
                    onClick={signInUsingGoogle}
                >{signIn} Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;