import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.instagram.com/abhirajkar_27_7" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/abhirajkar-bajpai-b46736228" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      </div>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">Terms</a>
        <span> | </span>
        <a href="#" target="_blank" rel="noopener noreferrer">About</a>
      </div>
      <p>&copy; Copyright Abhirajkar Bajpai</p>
    </footer>
  );
}

export default Footer;
