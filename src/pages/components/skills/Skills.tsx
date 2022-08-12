import { Title } from "@/components";
import dynamic from "next/dynamic";
import CardSkill from "../card-skill/CardSkill";
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
          <CardSkill src="/html.svg">HMTL</CardSkill>
          <CardSkill src="/css.svg">CSS</CardSkill>
          <CardSkill src="/javascript.svg">JavaScript</CardSkill>
          <CardSkill src="/git.svg">Git</CardSkill>
          <CardSkill src="/styled-component.svg">Styled Components</CardSkill>
          <CardSkill src="/react.svg">React</CardSkill>
          <CardSkill src="/next-js.svg">Next</CardSkill>
          <CardSkill src="/tailwind.svg">Tailwind</CardSkill>
          <CardSkill src="/sass.svg">Sass</CardSkill>
          <CardSkill src="/express.svg">Express</CardSkill>
          <CardSkill src="/nodejs.svg">Node</CardSkill>
          <CardSkill src="/typescript.svg">TypeScript</CardSkill>
          <CardSkill src="/redux.svg">Redux</CardSkill>
          <CardSkill src="/jest.svg">Jest</CardSkill>
        </aside>
      </div>
    </section>
  );
};

export default Skills;
