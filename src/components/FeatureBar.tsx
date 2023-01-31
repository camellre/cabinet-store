import React from "react";
import style from "../css/FeatureBar.module.scss";

export default function FeatureBar() {
  return (
    <div className={style.gridContainer}>
      <span className={style.gridItem}>Feature 1</span>
      <span className={style.gridItem}>Feature 2</span>
      <span className={style.gridItem}>Feature 3</span>
      <span className={style.gridItem}>Feature 4</span>
    </div>
  );
}
