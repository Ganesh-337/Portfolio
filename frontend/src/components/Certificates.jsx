import React from "react";
import JavaC from "../assets/JavaC.png";
import SD from "../assets/SdC.png";
import ReactJS from "../assets/ReactC.png";

const Certificates = () => {
  return (
    <div className="m-5">
      <h2 className="text-center">Certificates</h2>
      <div className="flex flex-col gap-3 md:grid md:grid-cols-3 m-5 gap-5">
        <div className="md:h-full bg-linear-to-r from-slate-500 to-gray-500 text-white p-5 rounded-md shadow-lg animate-slide-left">
          <img src={SD} alt="salesforce development" />
        </div>
        <div className="md:h-full bg-linear-to-r from-slate-500 to-gray-500 text-white p-5 rounded-md shadow-lg animate-slide-up-right">
          <img src={JavaC} alt="java principles" />
        </div>
        <div className="md:h-full bg-linear-to-r from-slate-500 to-gray-500 text-white p-5 rounded-md shadow-lg animate-slide-down-left">
          <img src={ReactJS} alt="react js" />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
