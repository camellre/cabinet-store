import React from "react";
import style from "../css/NavBar.module.scss";
import iconStyle from "../css/icon.module.scss";
import { ReactComponent as Toggler } from "../images/search.svg";

export default function NavBar() {
  return (
    <div>
      <nav className={style.nav}>
        <a href="/">
          <img src="../images/home.svg" alt="" />
        </a>
        <Toggler className={iconStyle.icon} />
      </nav>
    </div>
  );
}
