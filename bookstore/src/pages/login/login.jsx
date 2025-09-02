import {React, useState }from 'react'
import './login.css';

function login() {
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
       <form>
        <label htmlFor="email">Email or mobile phone number</label>
        <input type="text" id="email"/>

        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <label htmlFor="password">Password </label>
          <a href="#" className= "fp">Forgot Password</a>
        </div>

        <input type="password" id="password"/>


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