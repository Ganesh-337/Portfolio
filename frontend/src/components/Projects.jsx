import React, { useEffect, useRef, useState } from "react";
import wdj from "../assets/webdevjourney.png";
import cwn from "../assets/cryptoweather.png";
import blogdata from "../assets/blogdata2.png";
import authsystem from "../assets/authsystem.png";
import { useNavigate } from "react-router-dom";

const Projects = ({ projectRef }) => {
  const navigate = useNavigate();
  const [showProject, setShowProject] = useState(false);

  const projectData = [
    {
      id: 1,
      title: "Blog App",
      image: <img src={blogdata} alt="blog app" />,
      description: `This is a blog application where a user can create their own blogs an dview others blogs. The user has their own "My Blog" dashboard where they can view all their blogs. The user can maintain their blogs by update or delete. This application is specifically built for CRUD operations.`,
      animation: "animate-slide-up-left",
    },
    {
      id: 2,
      title: "Authentications System",
      image: <img src={authsystem} alt="auth system" />,
      description: `A user auth system with OTP validation enhances security by requiring a one-time password (OTP) during login or registration. OTPs are temporary codes (usually 4-6 digits) sent to a user's email or phone number and are valid for a short duration.`,
      animation: "animate-slide-up-right",
    },
    {
      id: 3,
      title: "Web Development Journey",
      image: <img src={wdj} alt="web dev journey" />,
      description: `An AI-powered learning website is an educational platform that delivers personalized, dynamic learning content using artificial intelligence. It adapts to a learner's needs and provides with a basic AI-generated answers and explanations.`,
      animation: "animate-slide-up-left",
    },
    {
      id: 4,
      title: "Crypto Weather Nexus",
      image: <img src={cwn} alt="crypto weather nexus" />,
      description: `Crypto Weather Nexus is an interactive web dashboard that delivers live insights on both cryptocurrency performance and city weather conditions, offering users a quick glance at two of the most dynamic data streams — finance and climate — in one place.`,
      animation: "animate-slide-up-right",
    },
  ];

  const handleViewDetail = (id) => {
    navigate(`/project/${id}`);
  };

  const viewProject = showProject ? projectData : projectData.slice(0, 3);

  return (
    <div ref={projectRef} className="m-5">
      <h2 className="text-center">Projects</h2>
      <div className="flex flex-col gap-5 lg:gap-3 md:grid md:grid-cols-3 lg:m-5">
        {viewProject.map((project) => (
          <div
            key={project.id}
            className={`md:h-full bg-gray-500 opacity-75 text-white p-5 rounded-md shadow-lg ${project.animation}`}
          >
            <div className="flex flex-col gap-3">
              {project.image}
              <h2>{project.title}</h2>
              <p className="text-sm">{project.description}</p>
            </div>
            <button
              className="mt-3"
              onClick={() => handleViewDetail(project.id)}
            >
              View Detail
            </button>
          </div>
        ))}
      </div>
      {!showProject && (
        <div
          onClick={() => setShowProject(true)}
          className="mt-5 bg-black w-fit mx-auto text-white hover:cursor-pointer hover:bg-white hover:text-black p-3 rounded-md shadow-md animate-slide-up"
        >
          <p>View More</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
