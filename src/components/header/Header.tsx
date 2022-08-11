import { Link } from "react-scroll";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <input type="checkbox" id="check" />
        <Link to="inicio" smooth={true}>
          JesuDev
        </Link>
        <label htmlFor="check" className={styles.containerMenu}>
          <img src="menu.svg" alt="menu" />
        </label>
        <nav className={styles.navigation}>
          <Link to="about" smooth={true}>
            Sobre Mi
          </Link>
          <Link to="skill" smooth={true}>
            Skills
          </Link>
          <Link to="proyect" smooth={true}>
            Proyectos
          </Link>
          <Link to="contact" smooth={true}>
            Contactos
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Header;
