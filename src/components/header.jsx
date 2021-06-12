import React from "react";
import * as Images from "../assets/images/index";
//pros: {isMobile: Boolean}
export default function Header({onSwitchPage}) {
  const onPageChange= (e, page) => {
    e.preventDefault();
    onSwitchPage(page)
  }
  return (
    <div className="menu-mobile d-flex d-md-none">
      <div className="menu-left d-flex">
        <img
          loading="lazy"
          src={Images.Logo}
          alt="logo"
          className="logo-image"
        />
        <a href="/" className="header-button active">
          HOME
        </a>
        <a href="/" onClick={(e)=>{onPageChange(e, 'WHITEPAPER')}} className="header-button">
          WHITEPAPER
        </a>
        <a href="/#teams" className="header-button">
          TEAM
        </a>
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
