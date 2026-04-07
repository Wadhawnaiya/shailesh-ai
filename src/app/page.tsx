import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedVideo from "@/components/FeaturedVideo";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Recognition from "@/components/Recognition";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedVideo />
        <Expertise />
        <Experience />
        <Recognition />
        <Publications />
        <Education />
        <Contact />
      </main>
    </>
  );
}
