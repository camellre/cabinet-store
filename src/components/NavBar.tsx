import React from "react";
import style from "../css/NavBar.module.scss";
import Icon from "../commoncomponents/Icon";
import { ReactComponent as NavBarImageHome } from "../images/home.svg";
import { ReactComponent as NavBarImageSearch } from "../images/search.svg";
import { ReactComponent as NavBarImageUser } from "../images/user.svg";

export default function NavBar() {
  return (
    <div className={style.navBarContainer}>
      <Icon IconImage={NavBarImageHome} />
      <div className={style.navBarMenuContainer}>
        <ul className={style.navBarMenu}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <Icon IconImage={NavBarImageSearch} />
        <Icon IconImage={NavBarImageUser} />
      </div>
    </div>
  );
}
