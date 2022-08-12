import { Title } from "@/components";
import React from "react";
import Card from "../card-skill/CardSkill";
import styles from "./styles.module.scss";

const Skills = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <aside className={styles.Datas}>
          <Title>Skills</Title>
          <p className={styles.parrafo} data-aos="fade-right">
            Mi sección de tecnologías:
          </p>
        </aside>
        <aside className={styles.cards}>
          <Card src="/html.svg">HMTL</Card>
          <Card src="/css.svg">CSS</Card>
          <Card src="/javascript.svg">JavaScript</Card>
          <Card src="/git.svg">Git</Card>
          <Card src="/styled-component.svg">Styled Components</Card>
          <Card src="/react.svg">React</Card>
          <Card src="/next-js.svg">Next</Card>
          <Card src="/tailwind.svg">Tailwind</Card>
          <Card src="/sass.svg">Sass</Card>
          <Card src="/express.svg">Express</Card>
          <Card src="/nodejs.svg">Node</Card>
          <Card src="/typescript.svg">TypeScript</Card>
          <Card src="/redux.svg">Redux</Card>
          <Card src="/jest.svg">Jest</Card>
        </aside>
      </div>
    </section>
  );
};

export default Skills;
