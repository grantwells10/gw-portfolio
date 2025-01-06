'use client'
import NavBar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
   <>
    <NavBar />
    <Header />
    <About />
    <Experience />
    <Projects />
   </>
  );
}
