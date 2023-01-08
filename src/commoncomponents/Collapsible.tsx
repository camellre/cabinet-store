import React, { useState } from "react";
import styles from "../css/Collapsible.module.scss";
import Icon from "./Icon";

function Collapsible() {
  const [userClick, setUserClick] = useState(false);

  const handleClick = () => {
    if (!userClick) return setUserClick(true);
    setUserClick(false);
  };
  return (
    <div
      className={
        userClick === true ? styles.collapsibleExpanded : styles.collapsible
      }
    >
      <header className={styles.collapsibleHeader}>
        <h2 className={styles.collapsibleHeading}>Item 1</h2>
        <button className={styles.collapsibleIcon} onClick={handleClick}>
          <Icon />
        </button>
      </header>
      <div className={styles.collapsibleContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem
        incidunt illo ab debitis veniam reprehenderit aut, iusto quae molestiae!
        Dolor dolorum vero, corporis explicabo ea nostrum error. In, quidem.
      </div>
    </div>
  );
}

export default Collapsible;
