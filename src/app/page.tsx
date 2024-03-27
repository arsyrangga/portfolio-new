"use client";

import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import AOS from "aos";
import { Suspense, useEffect } from "react";
import "aos/dist/aos.css";
import FlareCursor from "@/components/flareCursor/flareComponent";
import Skills from "@/components/skills/Skills";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
    window.scroll({ top: 0 });
  }, []);
  return (
    <div className="flex w-100 flex-col justify-center items-center">
      <FlareCursor />
      <Suspense
        fallback={
          <div
            style={{
              background: "red",
              width: "100vw",
              height: "100vh",
              position: "fixed",
              top: 0,
              zIndex: "9999",
            }}
          ></div>
        }
      >
        <main>
          <Navbar />
          <Hero />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
      </Suspense>
      <Footer />
    </div>
  );
}
