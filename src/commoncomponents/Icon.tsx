import React from "react";
import style from "../css/Icon.module.scss";

interface IconProp {
  IconImage: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

export default function Icon({ IconImage }: IconProp) {
  return (
    <span className={style.iconContainer}>
      <IconImage className={style.icon} />
    </span>
  );
}
