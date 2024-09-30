import React from 'react';
import "./landing.css";
import heroImage from '../Images/hero-image.jpg';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <section className='hero'>
                <div className='hero-text'>
                    <h1>The TrackMate app <br/> that does it all.</h1>
                    <p>Effortless tracking || Efficient management</p>
                </div>
                <div className='hero-image'>
                   <img src={heroImage} alt="Hero Image" />
                </div>
            </section>
            <section className='features'>
                <h2>Key Features</h2>
                <ul>
                    <li>Real-time account and inventory tracking</li>
                    <li>Automated reporting and analytics</li>
                    <li>Secure user access and permissions</li>
                </ul>
            </section>
            <section className='about'>
                <h2>About Us</h2>
                <p>TrackMate is a system designed to streamline your financial and inventory management.
                Easily track accounts, monitor inventory levels, and generate detailed reports.</p>
            </section>
            <section className='cta'>
                <h2>Get Started Today</h2>
                <button><a href="/register">Sign Up</a></button>
            </section>
        </div>
    )
}

export default LandingPage;