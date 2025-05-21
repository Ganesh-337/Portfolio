import React, { forwardRef, useRef, useState } from "react";
import Profile from "../assets/profile2.png";
import "../index.css";

const About = forwardRef(({ onViewProject }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);

    const link = document.createElement("a");
    link.href = import.meta.env.VITE_RESUME_URL;
    link.download = "Ganesh_S_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div>
      <h1
        className="block text-center lg:text-7xl text-5xl"
        data-animate="slide-down-left"
      >
        ABOUT
      </h1>
      <div className="mt-15 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2">
        <div className="order-1 lg:order-2">
          <img
            src={Profile}
            alt="Profile Picture"
            className="block lg:w-90 lg:h-90 w-50 h-50 mx-auto rounded-full cursor-pointer animate-shine"
            data-animate="slide-down-right"
          />
        </div>
        <div
          ref={ref}
          className="order-2 lg:order-1 px-4 items-center lg:ml-30"
        >
          <p
            className="block lg:text-2xl text-sm lg:text-justify text-center"
            data-animate="slide-down-left"
          >
            <p className="mb-5 mt-5">Hey there! I'm Ganesh,</p>
            An Information Technology engineer interested in Frontend, Backend
            and Fullstack development. I focus on creating engaging digital
            experiences and always strive to provide the best solution possible
            in every aspect of my project.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 mt-10 items-center">
            <button
              onClick={handleDownload}
              className="block w-1/2"
              data-animate="slide-up-right"
            >
              Download CV
            </button>

            {isLoading && (
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full loading-circle-animate"></div>
            )}

            <div
              className="block flex w-1/2 justify-center gap-3 rounded-md bg-white p-2 text-black border shadow cursor-pointer hover:bg-gray-100"
              data-animate="slide-up-left"
            >
              <p onClick={onViewProject}>View Projects</p>
              <p className="">&rarr;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
