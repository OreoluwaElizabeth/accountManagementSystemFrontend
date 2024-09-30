import React from 'react';
import './otp.css';

const OtpForm = () => {
    return (
        <form className='otp-form'>
            <h1>OTP</h1>
            <div className='otp-class'>
                <label>OTP:</label>
                <input type="number" name="otp" placeholder="Enter OTP" className='otp-input'/>
            </div>
            <button type="submit" className='submit-otp'>Verify</button>
        </form>
    )
}

export default OtpForm;