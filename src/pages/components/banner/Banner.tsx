import React from "react";
import styles from "./styles.module.scss";

const Banner = () => {
  return (
    <section className={`${styles.container} banner`}>
      <img src="/fondo.jpg" alt="setup fondo" />
      <div className={styles.datas}>
        <h1 data-aos="fade-up">Jesus Ayarza</h1>
        <p data-aos="fade-up">Front End Developer</p>
      </div>
    </section>
  );
};

export default Banner;
