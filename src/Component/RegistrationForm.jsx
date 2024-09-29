import React, {useState} from 'react';
import './registration.css';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
        <form className='registration-form'>
            <h1>Registration</h1>
            <div className='first-container'>
                <label>First Name:</label>
                <input type="text" name="firstName" placeholder="First Name" className='input-container'/>
                <label>Last Name:</label>
                <input type="text" name="lastName" placeholder="Last Name" className='input-container'/>
                <label>Industry:</label>
                <input type="industry" name="industry" placeholder="Industry" className='input-container'/>
                <label>Password:</label>
                <input type="password" name="password" placeholder="Password" className='input-container'/>
                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className='input-container'/>
            </div>
            <button type="submit" className='register-button'>Register</button>
        </form>
    )
}

export default RegistrationForm;