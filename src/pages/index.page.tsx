import React from "react";
import { Footer, Header, Layout } from "@/components";
import { About, Banner, Projects, Skills } from "./components";
import Script from "next/script";
const Home = () => {
  return (
    <Layout title="Home | JesuDev" description="portfolio de jesudev">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-3Z5SMJJQ81" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3Z5SMJJQ81');
        `}
      </Script>
    </Layout>
  );
};

export default Home;
