import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ scrollToAbout, scrollToPortfolio, scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gradient-to-r from-emerald-900 to-slate-900 opacity-75 hover:opacity-100 top-0 w-full shadow-lg">
      <div className="flex gap-2 justify-between items-center lg:h-20 h-15 lg:p-4 p-2">
        <h2>Portfolio</h2>
        {isDesktop ? (
          <div className="flex lg:gap-5 gap-10">
            <button onClick={scrollToAbout}>About</button>
            <button onClick={scrollToPortfolio}>Portfolio</button>
            <button onClick={scrollToContact}>Contact</button>
          </div>
        ) : (
          <div onClick={handleToggle} className="cursor-pointer">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        )}
      </div>

      {!isDesktop && isOpen && (
        <div className="flex flex-col gap-2 p-4 bg-gradient-to-r from-emerald-900 to-slate-900">
          <button onClick={scrollToAbout}>About</button>
          <button onClick={scrollToPortfolio}>Portfolio</button>
          <button onClick={scrollToContact}>Contact</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
