import React from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import Script from "next/script";
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3Z5SMJJQ81" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
   
     gtag('config', 'G-3Z5SMJJQ81');
    `}
        </Script>
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Layout;
