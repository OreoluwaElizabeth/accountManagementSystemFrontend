import React from 'react';
import './login.css';

const Login = () => {
    return (
        <form className='otp-container'>
            <h1>Login</h1>
            <label>Email:</label>
            <input type="email" name="email" placeholder="Enter email" className='email-input' />
            <label>Password:</label>
            <input type="password" name="password" placeholder="Enter password" className='email-input'/>
            <button type="submit" className='submit-button'>Login</button>
        </form>
    )
}

export default Login;