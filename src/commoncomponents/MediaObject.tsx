import React from "react";
import styles from "../css/MediaObject.module.scss";
import Icon from "./Icon";

function MediaObject() {
  return (
    <div className={styles.media}>
      <div className={styles.mediaImage}>
        <Icon />
      </div>
      <div className={styles.mediaBody}>
        <h3 className={styles.mediaTitle}>Media Object title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi
          ipsa, natus error nulla placeat impedit! Vitae animi deserunt quod?
        </p>
      </div>
    </div>
  );
}

export default MediaObject;
