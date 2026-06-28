
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/featuredwork";
import Contact from "@/components/contact";
import { Services } from "@/components/services";
import AboutMe from "@/components/aboutme";

export default function HomePage() {
  return (
    <>
      <Header/>

      <main>
        <Hero/>
        <AboutMe/>
        <Projects />
        <Services/>
   
        <Contact/>
      </main>

      <Footer />
    </>
  );
}



