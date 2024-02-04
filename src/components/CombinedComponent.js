import React, { useState } from 'react';
import './css/leftside.css';
import './css/RightSide.css';
import iconImage1 from '../images/git.svg';
import iconImage2 from '../images/twitter.svg';
import iconImage3 from '../images/linkedin.svg';
import iconImage4 from '../images/disc.svg';
import image1 from '../images/google.svg';
import image2 from '../images/apple.svg';
import AnotherPage from './AnotherPage'; // Import the AnotherPage component

const CombinedComponent = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true); // Update the state to indicate form submission
    };

    // If the form is submitted, render the AnotherPage component
    if (submitted) {
        return <AnotherPage />;
    }

    return (
        <div className="combined-container">
            <div className="left-side">
                <div className="page-container">
                    <div className="colored-section">
                        <div className="circle">
                            <svg width="100%" height="100%" viewBox="0 0 82.82 22.04" xmlns="http://www.w3.org/2000/svg">
                                <path d="M82.82,11.02 L60,0 L20,22.04 L0,11.02" fill="none" stroke="#605BFF" strokeWidth="6" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="text">BASE</div>
                        <div className="icon-container">
                            <img src={iconImage1} alt="Icon1" className="icon-image" />
                            <img src={iconImage2} alt="Icon2" className="icon-image" />
                            <img src={iconImage3} alt="Icon3" className="icon-image" />
                            <img src={iconImage4} alt="Icon3" className="icon-image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-side">
                <div className="righttext">Sign in</div>
                <div className="smalltext">Sign in to your account</div>
                <img src={image1} alt="Image 1" className="image1" />
                <img src={image2} alt="Image 2" className="image2" />
                <div className="form-card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email" className="email-label">Email Address</label>
                            <input type="email" id="email" name="email" className="input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="password-label">Password</label>
                            <input type="password" id="password" name="password" className="input" />
                            <div className='forgot-pass'>Forgot password?</div>
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                    <div className="first-text">Don’t have an account? <span className='second'>Register here</span></div>
                </div>
            </div>
        </div>
    );
};

export default CombinedComponent;
