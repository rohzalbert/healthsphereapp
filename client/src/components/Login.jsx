

// client/src/components/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      setError(error.message);
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="login.jpg" alt="Logo" className="login-logo" />
      </div>
      <div className="login-right">
        <h1 className="login-title">Log in</h1>
        {error && <p className="login-error">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Type your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <div className="login-buttons">
            <button type="button" onClick={() => navigate('/register')} className="login-button register-button">
              Register
            </button>
            <button type="submit" className="login-button login-button-main">
              Log in
            </button>
          </div>
        </form>
        <div className="login-divider">Or</div>
        <button className="login-social-button google-button">Sign in with Google</button>
        <button className="login-social-button apple-button">Sign in with Apple</button>
        <div className="login-footer">
          <a href="/forgot-password" className="login-footer-link">Forgot your password?</a>
          <a href="/terms" className="login-footer-link">Terms Of Use</a>
          <a href="/privacy" className="login-footer-link">Privacy Policy</a>
          <p>© HealthSphere 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
