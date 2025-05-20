import React from "react";
import HtmlImage from "../assets/html.svg";
import CssImage from "../assets/css.svg";
import JsImage from "../assets/javascript.svg";
import NodejsImage from "../assets/nodejs.svg";
import ReactImage from "../assets/react.svg";
import TailwindImage from "../assets/tailwind.svg";
import ViteImage from "../assets/vite.svg";

const TechStack = () => {
  const techStack = [
    { id: 1, image: HtmlImage, name: "HTML" },
    { id: 2, image: CssImage, name: "CSS" },
    { id: 3, image: JsImage, name: "JavaScript" },
    { id: 4, image: NodejsImage, name: "Node.js" },
    { id: 5, image: ReactImage, name: "React" },
    { id: 6, image: TailwindImage, name: "Tailwind" },
    { id: 7, image: ViteImage, name: "Vite" },
  ];

  const animationType = [
    "animate-slide-down",
    "animate-slide-up",
    "animate-slide-left",
    "animate-slide-right",
  ];

  function getRandomAnimation() {
    const randomIndex = Math.floor(Math.random() * animationType.length);
    return animationType[randomIndex];
  }

  return (
    <div className="mt-7">
      <h2 className="text-center">TechStack</h2>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5 text-center">
          {techStack.map((tech) => (
            <div key={tech.id}>
              <div
                className={`w-fit bg-black text-white p-5 rounded-md shadow-lg flex flex-col gap-3 ${getRandomAnimation()}`}
              >
                <img src={tech.image} alt="" className="w-20 h-20 object-fit" />
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
