import { Button, Title } from "@/components";
import React from "react";
import styles from "./styles.module.scss";

const About = () => {
  return (
    <section className={`${styles.container} about`}>
      <div className={styles.content}>
        <Title>¿Quién soy?</Title>
        <p data-aos="fade-up">
          Desarrollador Front end con capacidad de realizar proyectos reales en el entorno de React, NodeJS y Express,
          teniendo siempre en mente que sean escalables y modulares, para así poder lograr proyectos de calidad.
        </p>
        <Title>¿Por que yo?</Title>
        <p data-aos="fade-up">
          Soy un desarrollador con solidos conocimientos técnicos y 1 año de experiencia además de ser autodidacta que
          le gusta seguir aprendiendo de los demás y también me gusta compartir mis conocimientos e interactuar con la
          comunidad.
        </p>
        <div data-aos="fade-up" className={styles.buttons}>
          <Button href="https://jesus1811.github.io/cv/JesusAyarza.pdf">Descargar CV</Button>
          <Button secundary data-aos="fade-up" href="contact">
            Contactame
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
