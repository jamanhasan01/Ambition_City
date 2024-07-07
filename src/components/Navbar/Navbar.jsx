import { Container } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import VisaCard from "./VisaCard";
import navItem from "./Data";
import "./style.css";

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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Hide the mobile menu and dropdown when the route changes
    setIsMobileMenuOpen(false);
    setDropdown(null);
  }, [location]);

  return (
    <Container>
      <nav className="navbar" ref={navRef}>
        <div className="navbar-header font-Inter font-[500] !text-[16px] md:!text-[14px]">
          <button
            className="mobile-menu-button"
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="!text-mainClr" />
            ) : (
              <MenuIcon className="!text-mainClr" />
            )}
          </button>
          <ul className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
            {navItem.map((item) => (
              <li key={item.id} className="nav-item">
                {item.submenu.length > 0 ? (
                  <div
                    className="nav-link"
                    onClick={() => handleClick(item.id, true)}
                  >
                    {item.name}
                    <KeyboardArrowDownIcon />
                  </div>
                ) : (
                  <Link
                    className="nav-link"
                    to={item.link}
                    onClick={() => handleClick(item.id, false)}
                  >
                    {item.name}
                  </Link>
                )}
                {item.id === 2 && dropdown === 2 && (
                  <ul className="dropdown-menu show">
                    {item.submenu.map((subItem) => (
                     
                            <li key={subItem.id} className="dropdown-item">
                               <Link to={subItem.link}>
                        <VisaCard
                          country={subItem.name}
                          image={subItem.img} // Replace with actual image path
                          
                        />
                        </Link>
                      </li>
                     
                    ))}
                    <div className="centered-content">
                      {" "}
                      {/* Add this div */}
                      <button className=" font-Inter font-normal !text-[16px] xs:!text-[13px] sm:!text-[14px] bg-mainClr px-4 mt-3 text-white hover:bg-[#CF782B] hover:scale-[1.1] ease-in duration-200 rounded-md">
                        Many More
                      </button>
                    </div>
                  </ul>
                )}

                {item.id === 3 && dropdown === 3 && (
                  <ul className="dropdown-menu show">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.id} className="dropdown-item">
                        <Link to={subItem.link}>
                          {subItem.name}
                          <p className="dropdown-desc">{subItem.desc}</p>
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
