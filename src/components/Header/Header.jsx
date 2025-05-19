import React from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import './Header.css';

function Header() {
  return (
    <header>
        <div className='portfolio-logo'>
            Uttam Kumar
        </div>
        <div className="mobile-menu">
            <RxHamburgerMenu />
        </div>
        <nav className='navbar'>
            <ul className='nav-items'>
                <li className='nav-item'>
                    <NavLink to='/' end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/projects' className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/about' className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
                </li>   
                <li className='nav-item'>
                    <NavLink to='/contact' className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
