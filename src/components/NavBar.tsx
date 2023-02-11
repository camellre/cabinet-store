import React, { useEffect, useState } from "react";
import style from "../css/NavBar.module.scss";
import Icon from "../commoncomponents/Icon";
import { ReactComponent as NavBarImageHome } from "../images/home.svg";
import { ReactComponent as NavBarImageSearch } from "../images/search.svg";
import { ReactComponent as NavBarImageUser } from "../images/user.svg";
import { ReactComponent as NavBarImageSettings } from "../images/settings.svg";

export default function NavBar() {
  let navBarStyle = style.navBarBackground;
  const [toggler, setToggler] = useState(false);

  const handleTogglerClick = () => {
    console.log(toggler);
    console.log(navBarStyle);
    if (!toggler) return setToggler(true);
    setToggler(false);
  };

  useEffect(() => {
    if (toggler)
      navBarStyle = style.navBarBackground + " " + style.navBarMobile;
  });
  return (
    <div className={navBarStyle}>
      <div className={style.navBarContainer}>
        <span onClick={handleTogglerClick} className={style.navBarToggler}>
          <Icon IconImage={NavBarImageSettings} />
        </span>
        <Icon IconImage={NavBarImageHome} />
        <div className={style.navBarMenuContainer}>
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
    </div>
  );
}
