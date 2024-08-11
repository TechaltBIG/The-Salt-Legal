import React from "react";
import "./Navbar.css";
import "../../assets/css/responsive.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider.jsx";
import Logout from "../Logout.jsx";

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const scrollToNewsletter = () => {
    const newsSection = document.getElementById("newsLetter");
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollTocontactform = () => {
    const contactformSection = document.getElementById("contactform");
    if (contactformSection) {
      contactformSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutUsSection = document.getElementById("aboutUs");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCategory = () => {
    const categorySection = document.getElementById("Categories");
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDocs = () => {
    const DocsSection = document.getElementById("DocSection");
    if (DocsSection) {
      DocsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPackage = () => {
    const PackageSection = document.getElementById("packageSection");
    if (PackageSection) {
      PackageSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img className="logo-stl" src="../../src/assets/TSLlogonew.png" />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ paddingRight: "30px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link onClick={scrollToCategory}>Category</Link>
          </li>
          {/* <li>
            <Link to="/feature">Features</Link>
          </li> */}
          <li>
            <Link onClick={scrollToPackage}>Packages</Link>
          </li>
          <li>
            <Link onClick={scrollToDocs}>Templates</Link>
          </li>
          {/* <li>
            <Link onClick={scrollToNewsletter}>Newsletters</Link>
          </li> */}
          <li>
            <Link onClick={scrollToAbout}>About</Link>
          </li>
          <li>
            <Link style={{ borderRight: "none" }} onClick={scrollTocontactform}>
              Contact Us
            </Link>
          </li>
          <li className="btn-stl-2" style={{ paddingLeft: "50px" }}>
            <button
              onClick={() => navigate("/category-pay")}
              style={{ width: "150px" }}
            >
              My Templates
            </button>
          </li>
          {authUser ? (
            <Logout />
          ) : (
            <li className="btn-stl-2">
              <button onClick={() => navigate("/login")}>Sign In</button>
            </li>
          )}
          {/* <li className="btn-stl-2">
            <button onClick={() => navigate("/register")}>Register</button>
          </li> */}
        </ul>
      </header>
    </>
  );
};

export default Navbar;
