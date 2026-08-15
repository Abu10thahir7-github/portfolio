import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import FreeToolsSection from "@/components/FreeTools";
import WeProvideServices from "@/components/WeProvideServices";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main id="main-content" className="min-w-0 flex-1">
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <FreeToolsSection />
        <WeProvideServices />
        <Contact />
      </main>
    </div>
  );
}
