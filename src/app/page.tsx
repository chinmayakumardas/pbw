
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import { Services } from "@/components/services";

export default function HomePage() {
  return (
    <>
      <Header/>

      <main>
        <Hero/>
        <Projects />
        <Services/>
   
        <Contact/>
      </main>

      <Footer />
    </>
  );
}



