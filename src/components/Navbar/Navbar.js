import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
import "./Navbar.css";

// MUI Icons
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  const navigate = useNavigate();
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [click, setClick] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // listens for scrolling and sets state accordingly
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 100) {
      setNavbarScrolled(true);
    }
    if (window.scrollY < 100) {
      setNavbarScrolled(false);
    }
  });

  const navBarStyle = useMemo(() => {
    if (!navbarScrolled && !click) return "transparent-nav";
    return "solid-nav";
  }, [navbarScrolled, click]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const makeResponsive = () => {
    if (window.innerWidth <= 960) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  useEffect(() => {
    makeResponsive();
  }, []);

  window.addEventListener("resize", () => makeResponsive());

  return (
    <div
      style={{ position: "fixed", color: "secondary" }}
      className={navBarStyle}
    >
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" onClick={closeMobileMenu} className="navbar-logo">
            <h1>Ramtin Norozzy</h1>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <CloseIcon style={{ color: "black" }} />
            ) : (
              <MenuIcon style={{ color: "black" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu hidden"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/project"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="social">
            <a
              className="social-icons"
              href="https://www.instagram.com/ramskers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                style={{ width: "26px", height: "26px" }}
              ></InstagramIcon>
            </a>
            <a
              className="social-icons"
              href="https://github.com/ramskers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                style={{ width: "26px", height: "26px" }}
              ></GitHubIcon>
            </a>
            <a
              className="social-icons"
              href="https://www.linkedin.com/in/ramtinnorozzy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                style={{ width: "26px", height: "26px" }}
              ></LinkedInIcon>
            </a>
            <a
              className="social-icons"
              href="mailto:ramtinnorozzy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon style={{ width: "26px", height: "26px" }}></EmailIcon>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
