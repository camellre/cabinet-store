import React from "react";
import style from "../css/Button.module.scss";

interface ButtonProp {
  theme: "navBarButton" | "cardButton" | "longButton" | "shortButton";
  text: string;
}

export default function Button({ theme, text }: ButtonProp) {
  return <button className={style[theme]}>{text}</button>;
}
