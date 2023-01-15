import React from "react";
import style from "../css/Button.module.scss";

interface ButtonProp {
  theme: "navBarButton" | "cardButton" | "longButton" | "shorButton";
  text: string;
}

export default function Button({ theme, text }: ButtonProp) {
  return (
    <div>
      <button className={style[theme]}>{text}</button>
    </div>
  );
}
