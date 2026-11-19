import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TileBand from "@/components/TileBand";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <TileBand />
        <Story />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <TileBand />
      <Footer />
    </>
  );
}
