import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "./styles/navbar.css";
import Logo from "../assets/startupschoolwhitelogo.svg";

export default function Navbar() {
  const [mobileView, setMobileView] = useState(false);

  const switchView = () => {
    setMobileView(!mobileView);
  };

  const [navbarTop, setNavbarTop] = useState("0");

  useEffect(() => {
    let prevScrollpos = window.scrollY;
    window.onscroll = function() {
      let currentScrollPos = window.scrollY;
      setNavbarTop(prevScrollpos > currentScrollPos ? "0" : "-120px");
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <>
      <div class="navbar" style={{ top: navbarTop }}>
        <div className="navbar-not-mobile">
          <div className="nav-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="home" smooth={true} offset={-70} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} offset={-70} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="programs" smooth={true} offset={-120} duration={500}>
                  Programs
                </Link>
              </li>
              <li>
                <Link to="highlights" smooth={true} offset={-70} duration={500}>
                  Highlights
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  offset={-60}
                  duration={500}
                  class="contact-btn"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-mobile">
          <div className="nav-mob-head">
            <div className="nav-logo">
              <img src={Logo} alt="logo" />
            </div>
            <FaBars className="navbar-icon" onClick={switchView} />
          </div>
          {mobileView && (
            <div className="mobile-links">
              <ul>
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={switchView}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={switchView}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="programs"
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={switchView}
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="highlights"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={switchView}
                  >
                    Highlights
                  </Link>
                </li>
                <li class="contact-btn">
                  <Link
                    to="contact"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={switchView}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
