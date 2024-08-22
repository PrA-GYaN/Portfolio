import Image from "next/image";
import Navbar from "./comp/navbar";
import Landing from "./comp/landing";
import Style from "./comp/style";
import About from "./comp/about";
import Project from "./comp/project";
import Contact from "./comp/contact";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="content px-32 py-10">
        <section className="flex flex-col" id="Home">
          <Landing />
          <Style />
        </section>
        <section className="py-10" id="About">
          <About />
        </section>
        <section className="py-10" id="Projects">
          <Project />
        </section>
        <section className="py-10" id="Contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
