import Image from "next/image";
import React from "react";
import { Props } from "./skillCard.type";
import styles from "./styles.module.scss";

const SkillCard = ({ src, children }: Props) => {
  return (
    <div className={styles.container} data-aos="zoom-in">
      <Image src={src} alt={children} width="100px" height="100px" />
      <p>{children}</p>
    </div>
  );
};

export default SkillCard;
