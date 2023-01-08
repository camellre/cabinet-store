import React from "react";
import styles from "../css/Card.module.scss";
import Badge from "./Badge";
import Button from "./Button";

function Card() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card + " " + styles.cardSecondary}>
        <header className={styles.card__header}>
          <h3 className={styles.cardName}>Entry</h3>
          <span className={styles.cardPrice}>$14</span>
          <span className={styles.cardBillingCycle}>/month</span>
          <Badge theme="badge--secondary--small" text="10% Off" />
          <span className={styles.cardDescription}>Card Description</span>
        </header>
        <div className={styles.card__body}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            laborum impedit quam voluptatum exercitationem dolorum quibusdam
            recusandae similique quo consequuntur dignissimos, perferendis
            provident, sed, tenetur corporis fugit. Nemo, magni quia?
          </p>
          <Button theme="btn--outline" blockButton={true} />
        </div>
      </div>
    </div>
  );
}

export default Card;
