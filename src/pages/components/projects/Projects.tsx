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
            description="Plataforma para ver la serie, con caja de comentarios por capitulo en tiempo real"
            tecnologies="NEXT-SASS-REACT-FIREBASE-TYPESCRIPT"
          >
            Rickvana
          </ProjectCard>
          <ProjectCard
            icon="/service-comerce.png"
            href="https://service-comerce.vercel.app/"
            repository="https://github.com/jesus1811/service-comerce.git"
            description="Aplicacion web de servicios, cuenta con historial, y administracion de los servicios de cada usuario"
            tecnologies="NEXTJS-STYLED COMPONENTS-FIREBASE-EXPRESS-MYSQL (MERN)"
          >
            Service-commerce
          </ProjectCard>

          <ProjectCard
            icon="/promedio-notas.png"
            href="https://promedio-notas.vercel.app/"
            repository="https://github.com/jesus1811/notes.git"
            description="Aplicacion web para administrar notas de estudiantes"
            tecnologies="NEXT-NODE-MYSQL-EXPRESS-SASS (MERN)"
          >
            Notes
          </ProjectCard>

          <ProjectCard
            icon="/secret-chat.png"
            href="https://secret-chat-jesudev.vercel.app/"
            repository="https://github.com/jesus1811/ossi"
            description="aplicacion web de chat con salas el cual podras enviar mensajes e interactuar con grupos de amigos"
            tecnologies="NEXTJS-STYLED COMPONENTS-FIREBASE-EXPRESS-POSTGRESQL (PERN)"
          >
            Secret Chat
          </ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
