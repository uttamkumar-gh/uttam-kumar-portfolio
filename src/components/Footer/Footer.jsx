import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='portfolio-footer'>
        <div className="quick-link">
            <h3>Quick Links</h3>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>

            <div className="social">
                <Link to="https://github.com/yourusername" target="_blank">GitHub</Link>
                <Link to="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</Link>
                <Link to="mailto:uttamkumar9613@gmail.com">Email</Link>
            </div>

            <p className='copyright'>© {new Date().getFullYear()} Uttam Kumar. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
