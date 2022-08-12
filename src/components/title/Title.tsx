import React from "react";
import styles from "./styles.module.scss";
interface Props {
  children: string;
}

const Title = ({ children }: Props) => {
  return <h2 className={styles.container}>{children}</h2>;
};

export default Title;
