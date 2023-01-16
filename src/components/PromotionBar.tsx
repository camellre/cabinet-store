import React from "react";
import style from "../css/PromotionBar.module.scss";
import promotion_1 from "../images/promotion_1.jpg";
import promotion_2 from "../images/promotion_2.jpg";

export default function PromotionBar() {
  return (
    <div className={style.gridContainer}>
      <img className={style.gridItem_1} src={promotion_1} alt="" />
      <img className={style.gridItem_2} src={promotion_2} alt="" />
    </div>
  );
}
