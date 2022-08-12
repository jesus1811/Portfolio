import React from "react";
import { Props } from "./cardSkill.type";
import styles from "./styles.module.scss";

const CardSkill = ({ src, children }: Props) => {
  return (
    <div className={styles.container} data-aos="zoom-in">
      <img src={src} alt={children} />
      <p>{children}</p>
    </div>
  );
};

export default CardSkill;
