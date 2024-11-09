import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import "react-toastify/dist/ReactToastify.css";
import { cookies } from "next/headers";
import { COLOR_THEME_COOKIE_NAME } from "@/constants";

function Home() {
  const theme = cookies().get(COLOR_THEME_COOKIE_NAME);
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact theme={theme} />
    </div>
  );
}

export default Home;
