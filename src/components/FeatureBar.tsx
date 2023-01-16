import React from "react";
import style from "../css/FeatureBar.module.scss";

export default function FeatureBar() {
  return (
    <div className={style.gridContainer}>
      <p className={style.gridItem}>Feature 1</p>
      <p className={style.gridItem}>Feature 2</p>
      <p className={style.gridItem}>Feature 3</p>
      <p className={style.gridItem}>Feature 4</p>
    </div>
  );
}
