import { Title } from "@/components";
import React from "react";
import ProjectCard from "../project-card/ProjectCard";
import styles from "./styles.module.scss";

const Projects = () => {
  return (
    <div className={`${styles.container} projects`}>
      <div className={styles.content}>
        <Title>Proyectos</Title>
        <div className={styles.cards}>
          <ProjectCard
            icon="https://rick-and-morty-challenge-movie.vercel.app/banner.jpg"
            href="https://rick-and-morty-challenge-movie.vercel.app/home"
            repository="https://github.com/jesus1811/rick-and-morty-challenge"
            description="Plataforma para ver la serie Rick and morty"
            tecnologies="Nentsjs Sass Reactjs Firebase Typescript"
          >
            Rickvana
          </ProjectCard>
          <ProjectCard
            icon="/factura-pro-landing.png"
            href="https://factura-landing.vercel.app/"
            repository="https://github.com/jesus1811/factura-landing"
            description="Landing page de una aplicacion web de administracion de facturas y boletas"
            tecnologies="Nextjs tailwindcss Typescript"
          >
            Factura-pro landing
          </ProjectCard>

          <ProjectCard
            icon="/factura-pro-app.png"
            href="https://factura-pro.vercel.app/"
            description="Aplicacion web para administrar facturas y boletas con control a inventario"
            tecnologies="Nextjs Supabase Tailwindcss Zustand Typescript"
          >
            Factura-pro app
          </ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
