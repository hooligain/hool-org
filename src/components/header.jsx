import React from "react";
import * as Images from "../assets/images/index";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  return (
    <div className="menu-mobile d-flex d-md-none">
      <div className="menu-left d-flex">
        <img
          loading="lazy"
          src={Images.Logo}
          alt="logo"
          className="logo-image"
        />
        <Link to="/" className="header-button active">
          HOME
        </Link>
        {/* <a href="/" className="header-button active">
          HOME
        </a> */}
        <Link to="/whitepaper" className="header-button">
          WHITEPAPER
        </Link>
        {/* <a href="/" className="header-button">
          WHITEPAPER
        </a> */}
        <HashLink className="header-button" smooth to="/#teams">
          TEAM
        </HashLink>
        {/* <a href="/#teams" className="header-button">
          TEAM
        </a> */}
      </div>
      <div className="menu-burger">
        <button>
          <img
            loading="lazy"
            src={Images.MenuBurger}
            alt="burger"
            className="burger-image"
          />
        </button>
      </div>
    </div>
  );
}
