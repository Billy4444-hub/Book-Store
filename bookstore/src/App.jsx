import React from 'react';
import { useNavigate, Outlet, useLocation} from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  if(location.pathname === '/'){
     return (
    <div className="c1">
      <div className="c11">
        <img
          src="https://m.media-amazon.com/images/G/01/kfw/landing/img_logo._CB611756372_.png"
          alt="Amazon Logo"
          className="logo"
          width={500}
          height={500}
        />
        <p className="t1">Take your stories wherever you go</p>
        <div className="btnRow">
          <button
            className="btn1"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Create an Amazon account
          </button>
          <button
            className="btn2"
            onClick={() => {
              navigate('/login');
            }}
          >
            <img
              src="https://m.media-amazon.com/images/G/01/kfw/landing/icon-amazon-a._CB611757832_.png"
              alt="Amazon Logo"
              className="btnicon"
              width={20}
              height={20}
            />
            <span>Sign in with your account</span>
          </button>
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/G/01/kfw/landing/img_kindleWeb_IN._CB610886625_.png"
        alt="Amazon Logo"
        className="bottomimg"
        width={1000}
        height={500}
      />
    </div>
     );
  }
  return <Outlet/>;
}

export default App;
