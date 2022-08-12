import React from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  description: string;
}
const Layout = ({ children, title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="jesudev,portafolio,reactjs,frontend,javascript" />
        <meta name="autor" content="jesus ayarza" />
        <meta name="generator" content="Next.js" />
        <link rel="icon" href="/jesuDev.ico" />
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Layout;
