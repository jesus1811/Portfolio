import { Title } from "@/components";
import SkillCard from "../skill-card/SkillCard";
import { SkillsMock } from "./Skills.mock";
import styles from "./styles.module.scss";
const Skills = () => {
  return (
    <section className={`${styles.container} skills`}>
      <div className={styles.content}>
        <aside className={styles.Datas}>
          <Title>Tecnologías</Title>
        </aside>
        <aside className={styles.cards}>
          {SkillsMock.map((skill, index) => (
            <SkillCard key={index} src={skill.src}>
              {skill.name}
            </SkillCard>
          ))}
        </aside>
      </div>
    </section>
  );
};

export default Skills;
