import React from "react";
import styles from "../css/LinkArrow.module.scss";
import { Link } from "react-router-dom";

interface LinkPath {
  linkPath: string;
}

function LinkArrow({ linkPath }: LinkPath) {
  return (
    <Link to={linkPath} className={styles.linkArrow}>
      Learn More
    </Link>
  );
}

export default LinkArrow;
