import React from "react";
import styles from "../css/Badge.module.scss";

interface BadgeProps {
  theme: string;
  text: string;
}

function Badge({ theme, text }: BadgeProps) {
  return <span className={styles[theme]}>{text}</span>;
}

export default Badge;
