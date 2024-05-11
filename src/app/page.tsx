import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Testimony from "@/components/testimony";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      {/* <Education /> */}
      <Testimony />
      <Contact />
      <Footer />
    </main>
  );
}
