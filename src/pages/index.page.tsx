import React, { Suspense } from "react";
import { Footer, Header, Layout } from "@/components";
import { About, Analytics, Banner, Projects, Skills } from "./components";
const Home = () => {
  return (
    <Layout title="Home | JesuDev" description="portfolio de jesudev">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <Analytics />
    </Layout>
  );
};

export default Home;
