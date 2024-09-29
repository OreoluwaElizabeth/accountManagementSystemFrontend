import React, {useState} from 'react';
import "./email.css";

const EmailForm = () => {
    const[email, setEmail] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        const newEmail = email.trim();
        if (newEmail.trim() === "") {
            throw new Error("Email is required");
        }
    }

    return (
        <form className='email-container'>
            <h1>Email Form</h1>
            <div className='form-container'>
                <label>Email:</label>
                <input type="email" name="email" placeholder="Enter your email" className='form-input' />
            </div>
            <button type="submit" className='submit-btn'>Submit</button>
        </form>
    )
}

export default EmailForm;