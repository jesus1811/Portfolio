import { Button } from "@/components";
import React from "react";
import styles from "./styles.module.scss";
interface Props {
  children: string;
  icon: string;
  description: string;
  tecnologies: string;
  href: string;
  repository?: string;
}

const ProjectCard = ({ children, icon, description, tecnologies, href, repository }: Props) => {
  return (
    <div data-aos="zoom-in" className={styles.container}>
      <h2>{children}</h2>
      <div className={styles.content}>
        <img src={icon} width="255px" height="255px" loading="lazy" alt={children} />
        <div className={styles.datas}>
          <p>{description}</p>
          <span>{tecnologies}</span>
          <div className={styles.buttons}>
            <Button href={href}>demo</Button>
            {repository && (
              <a href={repository} target="_blank" rel="noreferrer">
                <img className={styles.repositorio} src={"/github.svg"} alt="repositorio github" loading="lazy" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
