import Image from "next/image";
import React from "react";
import { Props } from "./cardSkill.type";
import styles from "./styles.module.scss";

const CardSkill = ({ src, children }: Props) => {
  return (
    <div className={styles.container} data-aos="zoom-in">
      <Image src={src} alt={children} width="100px" height="100px" />
      <p>{children}</p>
    </div>
  );
};

export default CardSkill;
