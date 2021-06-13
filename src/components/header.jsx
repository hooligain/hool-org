import React from "react";
import * as Images from "../assets/images/index";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const LinkToContactUs = 'https://forms.gle/MapxURFLxcmzv7J28';

export default function Header() {
  return (
    <>
      <div className="menu d-none d-md-flex">
        <div className="menu-left">
          <Link to="/" className="header-button active">
            HOME
          </Link>
          <Link to="/whitepaper" className="header-button">
            WHITEPAPER
          </Link>
          <HashLink className="header-button" smooth to="/#teams">
            TEAM
          </HashLink>
        </div>
        <div className="logo">
          <img src={Images.LogoBg} alt="logo-bg" className="logo-background" />
          <img src={Images.Logo} alt="logo" className="logo-image" />
        </div>
        <div className="menu-right">
          <Link to="/testnest" className="header-button">
            TESTNEST
          </Link>
          <a
            href={LinkToContactUs}
            rel="noreferrer"
            target="_blank"
            className="header-button contact-us"
          >
            Contact us
          </a>
        </div>
      </div>
      <div className="menu-mobile d-flex">
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
          <Link to="/whitepaper" className="header-button">
            WHITEPAPER
          </Link>
          <HashLink className="header-button" smooth to="/#teams">
            TEAM
          </HashLink>
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
    </>
  );
}
