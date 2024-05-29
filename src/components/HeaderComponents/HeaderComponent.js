import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./HeaderComponent.scss";
import React, { useState } from "react";

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <Link className="logo" to={"/"}>
        <img src={logo} alt="logo" />
      </Link>

      <div className="menu-bar" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>
      <nav className={`nav-bar ${isMenuOpen ? "open" : ""}`}>
        <Link className="link" href="/">
          home
        </Link>
        <Link className="link" href="/shop">
          portfolio
        </Link>
        <Link className="link" href="/about">
          pages
        </Link>
        <Link className="link" href="/blog">
          blog
        </Link>
      </nav>
      <div className={`nav-button ${isMenuOpen ? "open" : ""}`}>button</div>
    </header>

    //     <header class="navbar">
    //       <a href="/" class="logo">
    //         Logo
    //       </a>

    //       <div className="menu-bar" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    //         ☰
    //       </div>

    //       <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
    //         <a href="/">Home</a>
    //         <a href="/shop">Shop</a>
    //         <a href="/about">About</a>
    //         <a href="/blog">Blog</a>
    //       </nav>
    //       <button className={`nav-button ${isMenuOpen ? "open" : ""}`}>
    //         Button
    //       </button>
    //     </header>
  );
};

export default HeaderComponent;
