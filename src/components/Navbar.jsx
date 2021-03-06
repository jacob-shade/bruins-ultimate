import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Bruins Ultimate <i className="fas fa-paw" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/schedule" className="nav-links" onClick={closeMobileMenu}>
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/payment" className="nav-links" onClick={closeMobileMenu}>
                Payment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/donate" className="nav-links" onClick={closeMobileMenu}>
                Donate
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              linkTo="/sign-up"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
