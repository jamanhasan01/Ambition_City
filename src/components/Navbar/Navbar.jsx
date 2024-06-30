import { Container } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import navItem from './Data';
import './style.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef();
  const location = useLocation();

  const handleClick = (id, hasSubmenu) => {
    if (hasSubmenu) {
      setDropdown(dropdown === id ? null : id);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setDropdown(null); // Close any open dropdown when toggling the mobile menu
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Hide the mobile menu and dropdown when the route changes
    setIsMobileMenuOpen(false);
    setDropdown(null);
  }, [location]);

  return (
    <Container>
      <nav className='navbar' ref={navRef}>
        <div className='navbar-header'>
          <button className='mobile-menu-button' onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? <CloseIcon className='!text-mainClr' /> : <MenuIcon className='!text-mainClr' />}
          </button>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            {navItem.map((item) => (
              <li key={item.id} className='nav-item'>
                {item.submenu.length > 0 ? (
                  <div className='nav-link' onClick={() => handleClick(item.id, true)}>
                    {item.name}
                    <KeyboardArrowDownIcon />
                  </div>
                ) : (
                  <Link className='nav-link' to={item.link} onClick={() => handleClick(item.id, false)}>
                    {item.name}
                  </Link>
                )}
                {item.submenu.length > 0 && (
                  <ul className={`dropdown-menu ${dropdown === item.id ? 'show' : ''}`}>
                    {item.submenu.map((subItem) => (
                      <li key={subItem.id} className='dropdown-item'>
                        <Link to={subItem.link}>
                          {subItem.name}
                          <p className='dropdown-desc'>{subItem.desc}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
