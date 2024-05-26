import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import navItem from './Data';
import './style.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (id) => {
    setDropdown(dropdown === id ? null : id);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container>
      <nav className='navbar'>
        <div className='navbar-header'>
          <button className='mobile-menu-button' onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? <CloseIcon className='!text-mainClr'/> : <MenuIcon className='!text-mainClr'/>}
          </button>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            {navItem.map((item) => (
              <li key={item.id} className='nav-item'>
                <Link className='nav-link' to={item.link} onClick={() => handleClick(item.id)}>
                  {item.name}
                  {item.submenu.length > 0 && <KeyboardArrowDownIcon />}
                </Link>
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
