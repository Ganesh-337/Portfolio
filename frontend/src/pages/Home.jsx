import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import { handleScroll } from "../animation/animate";

const Home = () => {
  const sectionRef = useRef({
    about: null,
    portfolio: null,
    contact: null,
  });

  const scrollTo = (section) => {
    const el =
      sectionRef.current[section]?.scrollRef || sectionRef.current[section];

    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectClick = () => {
    sectionRef.current.portfolio?.triggerProjectView?.();
    setTimeout(() => {
      scrollTo("portfolio");
    }, 100);
  };

  const handleContactClick = () => {
    scrollTo("contact");
  };

  useEffect(() => {
    handleScroll();
  });

  return (
    <div className="">
      <div>
        <Navbar
          scrollToAbout={() => scrollTo("about")}
          scrollToPortfolio={() => scrollTo("portfolio")}
          scrollToContact={() => scrollTo("contact")}
        />
      </div>

      <div className="mt-30 flex flex-col lg:flex-row gap-10 p-5 m-5">
        <div className="block flex-1 w-1/2" data-animate="slide-left">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-500 to-white">
            FullStack Developer
          </h1>
          <div className="mt-10 animate-slide-down-right animate-glow">
            <h2>GANESH S</h2>
            <h2>B TECH IT</h2>
            <div className="block mt-20" data-animate="slide-up-left">
              <p className="text-justify">
                Creating innovative, functional and user-friendly websites{" "}
                <br />
                and provide with digital solutions.
              </p>
            </div>

            <ul
              className="block flex gap-5 mt-20"
              data-animate="slide-down-right"
            >
              <li className="bg-gradient-to-tr from-[black] to-[] shadow-lg">
                React
              </li>
              <li className="bg-gradient-to-tr from-[black] to-[] shadow-lg">
                JavaScript
              </li>
              <li className="bg-gradient-to-tr from-[black] to-[] shadow-lg">
                Node Js
              </li>
              <li className="bg-gradient-to-tr from-[black] to-[] shadow-lg">
                Tailwind
              </li>
            </ul>
          </div>
          <div className="flex gap-5 mt-20">
            <button
              onClick={handleProjectClick}
              className="block"
              data-animate="slide-right"
            >
              Projects
            </button>
            <button
              onClick={handleContactClick}
              className="block"
              data-animate="slide-left"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <About
          ref={(el) => (sectionRef.current.about = el)}
          onViewProject={handleProjectClick}
        />
      </div>
      <div className="mt-20">
        <Portfolio ref={(el) => (sectionRef.current.portfolio = el)} />
      </div>
      <div className="m-10 mt-20" data-animate="slide-left">
        <Contact ref={(el) => (sectionRef.current.contact = el)} />
      </div>
      <div className="bg-slate-900 opacity-50 mt-20 text-center text-gray-400 text-sm p-5">
        <footer>2025@ All Rights reserved</footer>
      </div>
    </div>
  );
};

export default Home;
