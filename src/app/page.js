"use client";
import React from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SectionCTA from "@/components/SectionCTA";
import Skills from "@/components/Skills";


const Home = () => {
  return (
    <div>
      <ScrollToTopButton />
      <About />
      <Skills />
      <Project />
      <SectionCTA />
      <Contact />
    </div>
  );
};

export default Home;
