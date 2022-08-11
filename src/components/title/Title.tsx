import React from "react";
import styles from "./styles.module.scss";
import { Props } from "./title.type";

const Title = ({ children }: Props) => {
  return <h2 className={styles.container}>{children}</h2>;
};

export default Title;
