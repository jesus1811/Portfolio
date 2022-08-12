import { Title } from "@/components";
import SkillCard from "../skill-card/SkillCard";
import styles from "./styles.module.scss";
const Skills = () => {
  return (
    <section className={`${styles.container} skills`}>
      <div className={styles.content}>
        <aside className={styles.Datas}>
          <Title>Skills</Title>
          <p className={styles.parrafo} data-aos="fade-right">
            Mi sección de tecnologías:
          </p>
        </aside>
        <aside className={styles.cards}>
          <SkillCard src="/html.svg">HMTL</SkillCard>
          <SkillCard src="/css.svg">CSS</SkillCard>
          <SkillCard src="/javascript.svg">JavaScript</SkillCard>
          <SkillCard src="/git.svg">Git</SkillCard>
          <SkillCard src="/styled-component.svg">Styled Components</SkillCard>
          <SkillCard src="/react.svg">React</SkillCard>
          <SkillCard src="/next-js.svg">Next</SkillCard>
          <SkillCard src="/tailwind.svg">Tailwind</SkillCard>
          <SkillCard src="/sass.svg">Sass</SkillCard>
          <SkillCard src="/express.svg">Express</SkillCard>
          <SkillCard src="/nodejs.svg">Node</SkillCard>
          <SkillCard src="/typescript.svg">TypeScript</SkillCard>
          <SkillCard src="/redux.svg">Redux</SkillCard>
          <SkillCard src="/jest.svg">Jest</SkillCard>
        </aside>
      </div>
    </section>
  );
};

export default Skills;
