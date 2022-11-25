import React from "react";
import styles from "../css/Badge.module.scss";

interface Theme {
  theme: string;
  text: string;
}

function Badge({ theme, text }: Theme) {
  return <span className={styles[theme]}>{text}</span>;
}

export default Badge;
