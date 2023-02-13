import React, { useState } from "react";
import style from "../css/NavBar.module.scss";
import Icon from "../commoncomponents/Icon";
import { ReactComponent as NavBarImageHome } from "../images/home.svg";
import { ReactComponent as NavBarImageSearch } from "../images/search.svg";
import { ReactComponent as NavBarImageUser } from "../images/user.svg";
import { ReactComponent as NavBarImageSettings } from "../images/settings.svg";

interface DropdownMenu {
  [key: string]: JSX.Element;
}

export default function NavBar() {
  const iconContainer = <Icon IconImage={NavBarImageSettings} />;
  const [dropdownMenuContent, setDropdownMenuContent] = useState(<></>);

  const dropdownMenu: DropdownMenu = {
    home: (
      <div className={style.navBarDropdownMenu}>
        <a href="#1">Home1</a>
        <a href="#2">Home2</a>
        <a href="#3">Home3</a>
        <a href="#4">Home4</a>
      </div>
    ),
    shop: (
      <div className={style.navBarDropdownMenu}>
        <a href="#1">Shop1</a>
        <a href="#2">Shop2</a>
        <a href="#3">Shop3</a>
        <a href="#4">Shop4</a>
      </div>
    ),
    about: (
      <div className={style.navBarDropdownMenu}>
        <a href="#1">About1</a>
        <a href="#2">About2</a>
        <a href="#3">About3</a>
        <a href="#4">About4</a>
      </div>
    ),
    contact: (
      <div className={style.navBarDropdownMenu}>
        <a href="#1">Contact1</a>
        <a href="#2">Contact2</a>
        <a href="#3">Contact3</a>
        <a href="#4">Contact4</a>
      </div>
    ),
  };

  const [navBarStyle, setNavBarStyle] = useState(style.navBarBackground);

  const handleTogglerClick = () => {
    console.log(navBarStyle);
    if (navBarStyle === style.navBarBackground)
      return setNavBarStyle(style.navBarBackground + " " + style.navBarMobile);
    setNavBarStyle(style.navBarBackground);
  };

  const handleDropdown = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const menuName = e.currentTarget.id;
    console.log(menuName);
    setDropdownMenuContent(dropdownMenu[menuName]);
    console.log(dropdownMenu[menuName]);
  };

  const handleDropdownLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setDropdownMenuContent(<></>);
  };

  return (
    <div
      className={navBarStyle}
      onMouseLeave={(e) => {
        handleDropdownLeave(e);
      }}
    >
      <div className={style.navBarContainer}>
        <span onClick={handleTogglerClick} className={style.navBarToggler}>
          {iconContainer}
        </span>
        <Icon IconImage={NavBarImageHome} />
        <div className={style.navBarMenuContainer}>
          <a
            id="home"
            onMouseEnter={(e) => handleDropdown(e)}
            className={style.navBarMenuItem}
            href="#home"
          >
            Home
          </a>
          <a
            id="shop"
            onMouseEnter={(e) => handleDropdown(e)}
            className={style.navBarMenuItem}
            href="#shop"
          >
            Shop
          </a>
          <a
            id="about"
            onMouseEnter={(e) => handleDropdown(e)}
            className={style.navBarMenuItem}
            href="#about"
          >
            About Us
          </a>
          <a
            id="contact"
            onMouseEnter={(e) => handleDropdown(e)}
            className={style.navBarMenuItem}
            href="#contact"
          >
            Contact Us
          </a>
        </div>
        <div className={style.navBarMenuTools}>
          <Icon IconImage={NavBarImageSearch} />
          <Icon IconImage={NavBarImageUser} />
        </div>
      </div>
      <div className={style.navBarMobileMenu}>
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
      {dropdownMenuContent}
    </div>
  );
}
