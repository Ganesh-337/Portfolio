import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const WelcomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <div className="flex flex-col gap-3 justify-center items-center h-screen animate-slide-right">
        <h1>Hey developers!</h1>
        <p>Welcome to my portfolio.</p>
      </div>
    </div>
  );
};

export default WelcomePage;
