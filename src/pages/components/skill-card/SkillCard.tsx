import React from "react";
import styles from "./styles.module.scss";
interface Props {
  children: string;
  src: string;
}

const SkillCard = ({ src, children }: Props) => {
  return (
    <div className={styles.container} data-aos="zoom-in">
      <img src={src} alt={children} loading="lazy" />
      <p>{children}</p>
    </div>
  );
};

export default SkillCard;
