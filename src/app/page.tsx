import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
