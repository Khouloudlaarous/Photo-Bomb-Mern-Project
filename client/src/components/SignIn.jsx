import React from 'react';
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
    <div className="sign-in-container">
    <img src="../img/icons/PhotoBomb.jpg" alt="PhotoBomb Logo" className="logo" />
    <p className="logo-text">PhotoBomb!</p>
        <form>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <Link to="/register">Create Account</Link>
        <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    </div>
);
}

export default SignIn;