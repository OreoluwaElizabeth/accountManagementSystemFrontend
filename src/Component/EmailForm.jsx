import React from 'react';
import "./email.css";

const EmailForm = () => {
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