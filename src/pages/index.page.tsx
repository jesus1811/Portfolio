import { Footer, Header, Layout } from "@/components";
import { About, Banner, Projects, Skills } from "./components";
const Home = () => {
  return (
    <Layout title="Home | JesuDev" description="portfolio de jesudev">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </Layout>
  );
};

export default Home;
