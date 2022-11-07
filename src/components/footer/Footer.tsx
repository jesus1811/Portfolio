import Title from "../title/Title";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <section className={`${styles.container} contact`}>
      <Title>Contactos</Title>
      <div className={styles.content}>
        <a
          href="https://api.whatsapp.com/send?phone=936129604&text=Hola"
          target="_blank"
          rel="noreferrer"
        >
          <img src="whatsapp.svg" alt="" data-aos="fade-up" loading="lazy" />
          <p>WhatsApp</p>
        </a>
        <a
          href="https://www.linkedin.com/in/jesus-ayarza/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="linkedin.svg" alt="" data-aos="fade-up" loading="lazy" />
          <p>Linkedin</p>
        </a>
        {/* <a href="" target="_blank" rel="noreferrer">
          <img src="telegram.svg" alt="" data-aos="fade-up" loading="lazy" />
          <p>Telegram</p>
        </a> */}
        <a href="https://github.com/jesus1811" target="_blank" rel="noreferrer">
          <img src="github.svg" alt="" data-aos="fade-up" loading="lazy" />
          <p>GitHub</p>
        </a>
      </div>
      <p>©| JesuDev 2021 todos los derechos reservados |</p>
    </section>
  );
};

export default Footer;
