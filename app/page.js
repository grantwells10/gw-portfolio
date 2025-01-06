'use client'
import NavBar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
    <NavBar />
    <Header />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
   </>
  );
}
