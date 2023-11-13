import React from 'react';
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="register-container">
      <img src="../img/icons/PhotoBomb.jpg" alt="PhotoBomb Logo" className="logo" />
      <p className="logo-text">PhotoBomb!</p>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <Link to="/signin">Sign in</Link>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
}

export default Register;