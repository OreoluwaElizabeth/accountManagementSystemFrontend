import React, {useState} from 'react';
import './login.css';

const Login = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        const newEmail = email.trim();
        if (newEmail.trim() === "") {
            throw new Error("Email is required");
        }
        const newPassword = password.trim();
        if (newPassword.trim() === "") {
            throw new Error("Password is required");
        }
        const obj ={
            email: newEmail,
            password: newPassword,
        }
    }

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