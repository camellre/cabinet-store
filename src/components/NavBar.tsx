import React, { useState } from "react";
import style from "../css/NavBar.module.scss";
import Icon from "../commoncomponents/Icon";
import { ReactComponent as NavBarImageHome } from "../images/home.svg";
import { ReactComponent as NavBarImageSearch } from "../images/search.svg";
import { ReactComponent as NavBarImageUser } from "../images/user.svg";
import { ReactComponent as NavBarImageSettings } from "../images/settings.svg";

export default function NavBar() {
  const iconContainer = <Icon IconImage={NavBarImageSettings} />;

  const [navBarStyle, setNavBarStyle] = useState(style.navBarBackground);

  const handleTogglerClick = () => {
    console.log(navBarStyle);
    if (navBarStyle === style.navBarBackground)
      return setNavBarStyle(style.navBarBackground + " " + style.navBarMobile);
    setNavBarStyle(style.navBarBackground);
  };

  return (
    <div className={navBarStyle}>
      <div className={style.navBarContainer}>
        <span onClick={handleTogglerClick} className={style.navBarToggler}>
          {iconContainer}
        </span>
        <Icon IconImage={NavBarImageHome} />
        <div className={style.navBarMenuContainer}>
          <div className={style.navBarMenuItemContainer}>
            <a className={style.navBarMenuItem} href="#home">
              Home
            </a>
            <div className={style.navBarDropdownMenuContainer}>
              <a className={style.navBarDropdownMenuItem} href="#link1">
                Link 1
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link2">
                Link 2
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link3">
                Link 3
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link4">
                Link 4
              </a>
            </div>
          </div>
          <a id="shop" className={style.navBarMenuItem} href="#shop">
            Shop
          </a>
          <a id="about" className={style.navBarMenuItem} href="#about">
            About Us
          </a>
          <a id="contact" className={style.navBarMenuItem} href="#contact">
            Contact Us
          </a>
        </div>
        <div className={style.navBarMenuToolContainer}>
          <Icon IconImage={NavBarImageSearch} />
          <Icon IconImage={NavBarImageUser} />
        </div>
      </div>
      <div className={style.navBarMobileMenuContainer}>
        <a className={style.navBarMenuItem} href="#home">
          Home
        </a>
        <a className={style.navBarMenuItem} href="#shop">
          Shop
        </a>
        <a className={style.navBarMenuItem} href="#about">
          About Us
        </a>
        <a className={style.navBarMenuItem} href="#contact">
          Contact Us
        </a>
      </div>
    </div>
  );
}
