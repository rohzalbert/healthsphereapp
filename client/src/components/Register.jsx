
//client/src/components/register 
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file for styling

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sex, setSex] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        phone,
        sex,
        country,
        city,
      });
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="register-photo">
          <img src="register.jpg" alt="Logo" />
        </div>
      </div>
      <div className="register-right">
        <h1 className="register-title">Register</h1>
        {error && <p className="register-error">{error}</p>}
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="register-input"
          />
          <select
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            required
            className="register-input"
          >
            <option value="" disabled>Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className="register-input"
          >
            <option value="" disabled>Select Country</option>
            <option value="Bulgaria">Nigeria</option>
          </select>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="register-input"
          />
          <div className="register-checkbox">
            <label>
              <input type="checkbox" /> Receive timely updates with the latest medical news and healthcare tips from us.
            </label>
            <label>
              <input type="checkbox" required /> By clicking here you agree with our <a href="/terms">Terms Of Use</a>.
            </label>
          </div>
          <div className="register-buttons">
            <button type="button" onClick={() => navigate('/')} className="register-button back-button">
              Back
            </button>
            <button type="submit" className="register-button register-button-main">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
