import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
const signIn = <FontAwesomeIcon icon={faSignInAlt} />
const Signin = () => {
    const { signInUsingGoogle } = useAuth();
    // const onSubmit = data => console.log(data);
    //defaultValue="test"
    return (
        <div className="login-form-container">
            <div className="login-form">
                <h2>Sign in or create an account</h2>
                <form className="">
                    <input className="form-control" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="form-control" type="password" name="" id="" placeholder="Your password" />
                    <br />
                    <input className="btn-menual" type="submit" value="Login" />
                </form>
                <p>not a member? <Link to="/register">Register</Link></p>
                <div>-------or--------</div>
                <button
                    className="btn-menual"
                    onClick={signInUsingGoogle}
                >{signIn} Google Sign In</button>
            </div>
        </div>
    );
};

export default Signin;