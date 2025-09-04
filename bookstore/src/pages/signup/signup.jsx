import React from 'react';
import './signup.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

function signup() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        if (response.ok) {
            alert('Account created successfully');
            navigate('/login');
        }else{
            const data = await response.json();
            alert(data.message || 'Error creating account');
        }
        }catch (error) {
            console.error('Error during signup:', error);
            alert('An error occurred during signup. Please try again.');
        }
    };

  return (
     <div className= "createAccountContainer">
            <img
                src="https://m.media-amazon.com/images/G/31/kfw/landing/img_logo_DKBL._CB612496475_.png"
                alt="Amazon Kindle Logo"
                width={150}
                height={50} 
                className= "logo"
            />
            <h1>Create account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" placeholder="First and last name" value={formData.name} onChange={handleChange} required/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="At least 6 characters" value={formData.password} onChange={handleChange} required/>
                <p className= "passwordInfo">Passwords must be at least 6 characters.</p>

                <label htmlFor="password-again">Password again</label>
                <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required/>

                <button type="submit" className= "createAccountButton">Create your Amazon account</button>
            </form>

            <p className= "agreement">
                By clicking "Create your Amazon account", you agree to the Amazon
                <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"> Conditions of Use & Sale</a>,
                the <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Kindle Store Terms of Use</a> and
                Amazon's <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>.
            </p>

            <p className= "signin">
                Already have an account? <a href="/login">Sign in</a>
            </p>
        </div>
  )
}

export default signup