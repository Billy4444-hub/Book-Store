import {React, useState }from 'react'
import './login.css';
import {useNavigate} from 'react-router-dom';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

function login() {

  const [formData, setFormData] = useState({
          email: '',
          password: ''
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
       const { email, password } = formData;

       try {
            const response = await fetch(`${apiUrl}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (response.ok) {
           const data = await response.json();
            alert('Login successful');

            // console.log('Token:', data.token);
            navigate('/library');
        }else{
            const data = await response.json();
            alert(data.message || 'Error logging in');
        }
        }catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again.');
        }
    };

  return (
    <div className= "signInContainer">
      <img
        src="https://m.media-amazon.com/images/G/31/kfw/landing/img_logo_DKBL._CB612496475_.png"
        alt="Amazon Kindle Logo"
        width={150}
        height={50}
        className= "logo"
      />
       <h1>Sign in</h1>
       <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email or mobile phone number</label>
        <input type="text" id="email" value={formData.email} onChange={handleChange} required/>

        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <label htmlFor="password">Password </label>
          <a href="#" className= "fp">Forgot Password</a>
        </div>

        <input type="password" id="password" value={formData.password} onChange={handleChange} required/>


        <button type="submit" className= "signInButton"
        >Sign in</button>

      </form>
      <p className= "agreement">
        By continuing, you agree to Amazon's
        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"> Conditions of Use</a> and
        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496"> Privacy Notice</a>.
      </p>

      <p className= "createAccount">
        New to Amazon? <a href="/signup">Create your Amazon account</a>
      </p>
    </div>
  )
}

export default login