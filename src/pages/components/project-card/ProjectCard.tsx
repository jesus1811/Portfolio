import { Button } from "@/components";
import Image from "next/image";
import React from "react";
import { Props } from "./projectCard.type";
import styles from "./styles.module.scss";

const ProjectCard = ({ children, icon, description, tecnologies, href, repository }: Props) => {
  return (
    <div data-aos="zoom-in" className={styles.container}>
      <h2>{children}</h2>
      <Image src={icon} width="255px" height="255px" />
      <div className={styles.datas}>
        <p>{description}</p>
        <span>{tecnologies}</span>
        <div className={styles.buttons}>
          <Button href={href}>demo</Button>
          <a href={repository} target="_blank" rel="noreferrer">
            <img className={styles.repositorio} src={"/github.svg"} alt="repositorio github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
