import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            HealthSphere
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleMenu} 
            aria-controls="navbarNav" 
            aria-expanded={isMenuOpen ? 'true' : 'false'} 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/articles">Articles</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/videos">Videos</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-mint-green nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hero-text">
              <h1>A modern way to track your health</h1>
              <p>Free mobile app to manage medication plans, log health data, store medical docs, track symptoms, share info with doctors for remote consultations, receive health advice & news.</p>
              <div className="app-buttons">
                <Link to="/register" className="btn btn-primary">Get for Android</Link>
                <Link to="/register" className="btn btn-secondary">Get for iOS</Link>
              </div>
            </div>
            <div className="col-md-6 hero-image">
             <img src="./hero.jpg" alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center">
        <div className="container">
          <p>© 2024 HealthSphere. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
