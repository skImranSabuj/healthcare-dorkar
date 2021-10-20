import React from 'react'
import useAuth from '../../hooks/useAuth'

const Contact = () => {
    const { user } = useAuth();
    return (
        <div>
            <div className="login-form d-flex mx-auto my-5">
                <div className="py-3">
                    <h2 className="pb-3">Share your thoughts with us</h2>
                    <form>
                        <input defaultValue={user.email} className="form-control" type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Your Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <br />
                        <input className="btn-menual" type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
