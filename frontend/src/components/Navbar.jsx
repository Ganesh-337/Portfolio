import React from "react";

const Navbar = ({ scrollToAbout, scrollToPortfolio, scrollToContact }) => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 to-slate-900 opacity-75 hover:opacity-100 absolute top-0 w-full shadow-lg">
      <div className="flex justify-between m-4">
        <h2>Portfolio</h2>
        <div className="flex gap-5">
          <button onClick={scrollToAbout}>About</button>
          <button onClick={scrollToPortfolio}>Portfolio</button>
          <button onClick={scrollToContact}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
