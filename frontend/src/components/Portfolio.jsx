import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Projects from "./Projects";
import Certificates from "./Certificates";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "../animation/animate";
import TechStack from "./TechStack";

const Portfolio = forwardRef(({ setProjectRef }, ref) => {
  const [showView, setShowView] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const viewRef = useRef(null);
  const viewContainerRef = useRef(null);
  const rootRef = useRef(null);

  const handleView = () => {
    setShowView((prev) => !prev);
  };

  const handleProject = () => {
    setShowProject(true);
    setShowView(false);
    setShowCertificates(false);
    setShowSkills(false);
  };

  useImperativeHandle(ref, () => ({
    triggerProjectView: () => handleProject(),
    scrollRef: rootRef.current,
    // setShowProject(true),
  }));

  const handleCertificates = () => {
    setShowCertificates(true);
    setShowView(false);
    setShowProject(false);
    setShowSkills(false);
  };

  const handleSkills = () => {
    setShowSkills(true);
    setShowView(false);
    setShowProject(false);
    setShowCertificates(false);
  };

  useEffect(() => {
    if (setProjectRef) {
      setProjectRef(rootRef.current);
    }
  }, [setProjectRef]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickInside = viewRef.current?.contains(event.target);
      const clickOutside = viewContainerRef.current?.contains(event.target);
      if (!clickInside && !clickOutside) {
        setTimeout(() => setShowView(false), 0);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div
        ref={rootRef}
        className="block text-center flex flex-col gap-5"
        data-animate="slide-up"
      >
        <h1 className="lg:text-7xl text-5xl">Portfolio Showcase</h1>
        <h2
          className="block mx-auto lg:text-justify text-gray-600 text-sm lg:text-2xl"
          data-animate="slide-up-right"
        >
          Explore my journey through projects, certifications, and technical
          expertise. <br /> Each section represents a milestone in my continuous
          learning path.
        </h2>
        <p>Click below to view my projects!!</p>
      </div>
      <div>
        <div
          ref={viewContainerRef}
          onClick={handleView}
          className="flex justify-between items-center mt-10 bg-white w-1/2 p-2 mx-auto text-black text-center rounded-md shadow cursor-pointer hover:bg-gray-100 animate-custom-pulse"
          data-animate="slide-down"
        >
          <p className="mx-auto">View</p>
        </div>
      </div>
      <AnimatePresence>
        {showView && (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={fadeInUp.transition}
            className="mt-2 bg w-1/2 mx-auto p-3 rounded-md shadow-lg cursor-pointer text-purple-800"
          >
            <div ref={viewRef} className="p-2">
              <div
                onClick={handleProject}
                className="px-4 py-2 text-sm hover:bg-gray-100"
              >
                Projects
              </div>
              <div
                onClick={handleCertificates}
                className="px-4 py-2 text-sm hover:bg-gray-100"
              >
                Certificates
              </div>
              <div
                onClick={handleSkills}
                className="px-4 py-2 text-sm hover:bg-gray-100"
              >
                TechStack
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div>{showProject && <Projects />}</div>
      <div>{showCertificates && <Certificates />}</div>
      <div>{showSkills && <TechStack />}</div>
    </div>
  );
});

export default Portfolio;
