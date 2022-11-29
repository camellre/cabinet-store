import React from "react";
import styles from "../css/Input.module.scss";

function Input() {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Enter here......"
    />
  );
}

export default Input;
