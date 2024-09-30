import React, { useState } from 'react';
import './registration.css';


const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the default form submission
        
        const userData = {
            firstName,
            lastName,
            email,
            password,
        };
        
        try {
            const response = await fetch("http://localhost:8080/user/registration", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData), // Send the data as JSON
            });

            console.log(response)
            if (response.ok) {
                // Handle successful response
                console.log("User registered successfully");
            } else {
                // Handle server errors
                console.error("Error in registration");
            }
        } catch (error) {
            // Handle network errors
            console.error("Network error:", error);
        }
    };

    return (
        <form className='registration-form' onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <div className='first-container'>
                <label>First Name:</label>
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name" 
                    className='input-container' 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                />
                <label>Last Name:</label>
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    className='input-container' 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                />
                <label>Industry:</label>
                <input 
                    type="industry" 
                    name="industry" 
                    placeholder="Industry" 
                    className='input-container'
                />
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    className='form-input' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <label>Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className='input-container' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <label>Confirm Password:</label>
                <input 
                    type="password" 
                    name="confirmPassword" 
                    placeholder="Confirm Password" 
                    className='input-container'
                />
            </div>
            <button type="submit" className='register-button'>Register</button>
        </form>
    );
};

export default RegistrationForm;
