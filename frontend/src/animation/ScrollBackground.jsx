import React, { useState, useEffect } from "react";

const ScrollBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transformValue = (offset) => {
    const move = (scrollPosition - offset) * 0.2;
    return `translate(${move}px, ${move}px)`;
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div
        className="absolute top-0 left-[-4px] md:w-96 md:h-96 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"
        style={{
          transform: transformValue(0),
          transition: "transform 1.4s ease-out",
        }}
      />
      <div
        className="absolute top-0 right-[-4px] w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block"
        style={{
          transform: transformValue(100),
          transition: "transform 1.4s ease-out",
        }}
      />
      <div
        className="absolute bottom-[-8px] left-[-40%] md:left-20 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"
        style={{
          transform: transformValue(200),
          transition: "transform 1.4s ease-out",
        }}
      />
      <div
        className="absolute bottom-[-10px] right-20 w-96 h-96 bg-lime-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block"
        style={{
          transform: transformValue(300),
          transition: "transform 1.4s ease-out",
        }}
      />
    </div>
  );
};

export default ScrollBackground;
