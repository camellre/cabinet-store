import React from "react";
import style from "../css/NavBar.module.scss";
import iconStyle from "../css/Icon.module.scss";
import listStyle from "../css/List.module.scss";
import { ReactComponent as Toggler } from "../images/search.svg";
import { ReactComponent as HomeIcon } from "../images/home.svg";

export default function NavBar() {
  return (
    <div>
      <nav className={style.nav}>
        <a href="/">
          <HomeIcon className={iconStyle.icon} />
        </a>
        <Toggler className={iconStyle.icon} />
        <ul className={listStyle.list + " " + listStyle.navList}>
          <li className={style.navItem}>
            <a className={style.navItemLink} href="#">
              Shop
            </a>
          </li>
          <li className={style.navItem}>
            <a className={style.navItemLink} href="#">
              Design
            </a>
          </li>
          <li className={style.navItem}>
            <a className={style.navItemLink} href="#">
              About Us
            </a>
          </li>
          <li className={style.navItem}>
            <a className={style.navItemLink} href="#">
              Help
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
