import React from "react";
import styles from "../css/Button.module.scss";

interface ButtonProps {
  theme: string;
  blockButton: boolean;
}

function Button({ theme, blockButton }: ButtonProps) {
  const buttonStyle =
    blockButton === true
      ? styles[theme] + " " + styles["btn--block"]
      : styles[theme];
  return <button className={buttonStyle}>Buy Now</button>;
}

export default Button;
