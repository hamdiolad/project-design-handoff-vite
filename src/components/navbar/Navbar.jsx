import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import LogoMobile from "../../assets/LogoMobile.png";
import "./navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu state:", isOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger">
        <div className="lineA"></div>
        <div className="lineB"></div>
        <div className="lineC"></div>
      </div>

      <div className="navbar-menu">
        <button className="menu-button" onClick={toggleMenu}>
          Menu
        </button>
        <Menu isOpen={isOpen}>
          <a href="/classes">Classes</a>
          <a href="/aboutus">About Us</a>
          <a href="/signin">Sign in</a>
        </Menu>
      </div>

      <div className="navbar-logo">
        <img src={LogoMobile} alt="Logo" />
      </div>
    </nav>
  );
};

//<div className="menu-container">
