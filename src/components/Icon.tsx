import React from "react";
import { ReactComponent as Home } from "../images/home.svg";
import styles from "../css/Icon.module.scss";

function Icon() {
  return (
    <span className={styles["icon-container"]}>
      <Home className={styles["icon--primary"]} />
    </span>
  );
}

export default Icon;
