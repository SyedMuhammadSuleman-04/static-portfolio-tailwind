import About from "./component/HeroSection";
import Navbar from "./component/Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import Skills from "./Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black ">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <About />
      </div>
      <div>
        <br />
        <hr className="bg-red-500" />
      </div>
      <br /> <br />
      <div>
        <Skills />
      </div>
      <div>
        <br />
        <hr className="bg-red-500" />
      </div>
      <br /> <br />
      <div>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
