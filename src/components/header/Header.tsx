import { useContext } from "react";
import { Link } from "react-scroll";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerDiv}>
        <input type="checkbox" id="check" className={styles.checkedNav} />
        <Link to="inicio" smooth={true} className={styles.linkMain}>
          JesuDev
        </Link>

        <label htmlFor="check" className="btnCheck">
          <img src="menu.svg" alt="" className={styles.image} />
        </label>
        <nav className={styles.navigation}>
          <Link to="about" smooth={true} className={styles.link}>
            Sobre Mi
          </Link>
          <Link to="skill" smooth={true} className={styles.link}>
            Skills
          </Link>
          <Link to="proyect" smooth={true} className={styles.link}>
            Proyectos
          </Link>
          <Link to="contact" smooth={true} className={styles.link}>
            Contactos
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Header;
