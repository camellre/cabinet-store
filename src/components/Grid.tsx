import React from "react";
import styles from "../css/Grid.module.scss";

function Grid() {
  return (
    <div className={styles.grid + " " + styles.gridCols3}>
      <div style={{ height: "100px", background: "gold" }}></div>
      <div style={{ height: "100px", background: "blue" }}></div>
      <div style={{ height: "100px", background: "red" }}></div>
    </div>
  );
}

export default Grid;
