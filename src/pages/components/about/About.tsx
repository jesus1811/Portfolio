import { Button, Title } from "@/components";
import React from "react";
import styles from "./styles.module.scss";

const About = () => {
  return (
    <section className={`${styles.container} about`}>
      <div className={styles.content}>
        <Title>Acerca de mi</Title>
        <p data-aos="fade-up">
          Apasionado desarrollador Front-End con más de 2 años de experiencia en ReactJS y su ecosistema. Mi forma de trabajo se centra en la creación de aplicaciones web escalables y modulares para
          ofrecer soluciones de calidad.
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
