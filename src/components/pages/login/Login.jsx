import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginEffect from '../../Effect/LoginEffect';

const Login = () => {
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    return navigate('/forgot-password');
  };

  const handleRegister = () => {
    return navigate('/signup');
  };

  return (
    <>  
    <LoginEffect />
    <div id="form-ui">
      <form action="" method="post" id="form">
        <div id="form-body">
          <div id="welcome-lines">
            <div id="welcome-line-1">LogIn</div>
            <div id="welcome-line-2">Welcome Back Sir</div>
          </div>
          <div id="input-area">
            <div className="form-inp">
              <input placeholder="Email Address" type="text" />
            </div>
            <div className="form-inp">
              <input placeholder="Password" type="password" />
            </div>
          </div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="submit">Login</button>
          </div>
          <div id="forgot-pass">
            <button onClick={handleForgotPassword}>Forgot password?</button>
          </div>
          <div id="Resister">
            <button onClick={handleRegister}>Register Now</button>
          </div>
          <div id="bar"></div>
        </div>
      </form>
    </div>
    </>
    
  );
};

export default Login;
