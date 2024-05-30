import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./HeaderComponent.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav>
        <div className="header">
          <div className="nav-responsive">
            <Link className="logo" to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
            <div
              className="menu-bar"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>

          <div className={`nav-link ${showMenu ? "show" : ""}`}>
            <Link className="link" to="/">
              home
            </Link>
            <Link className="link" to="/shop">
              portfolio
            </Link>
            <Link className="link" to="/about">
              pages
            </Link>
            <Link className="link" to="/blog">
              blog
            </Link>
          </div>

          <div className={`nav-button ${showMenu ? "show" : ""}`}>
            <button className="btn-signIn">Sign In</button>
            <button className="btn-logIn">Log In</button>
          </div>
        </div>

        <div className="line">
          <hr />
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
