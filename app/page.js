'use client'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  // check user's preferences
  // useEffect(() => {
  //  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //    setIsDarkMode(true);
  //  } else {
  //    setIsDarkMode(false);
  //  }
  // },[])

  // act based on theme button
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])

  return (
   <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
    <Experience isDarkMode={isDarkMode} />
    <Projects isDarkMode={isDarkMode} />
    <Contact isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
   </>
  );
}
