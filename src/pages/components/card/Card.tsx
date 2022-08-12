import React from "react";
import { Props } from "./card.type";
import styles from "./styles.module.scss";

const Card = ({ src, children }: Props) => {
  return (
    <div className={styles.container} data-aos="zoom-in">
      <img src={src} alt={children} />
      <p>{children}</p>
    </div>
  );
};

export default Card;
