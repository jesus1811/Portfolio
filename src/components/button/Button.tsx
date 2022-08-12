import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-scroll";
interface Props {
  children: string | JSX.Element | JSX.Element[];
  href: string;
  secundary?: boolean;
}
const Button = ({ children, href, secundary }: Props) => {
  if (secundary)
    return (
      <Link className={`${styles.container} ${styles.container_secundary}`} smooth to={href!}>
        {children}
      </Link>
    );
  return (
    <a className={`${styles.container} ${styles.container_primary}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default Button;
