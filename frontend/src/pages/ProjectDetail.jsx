import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import wdj from "../assets/webdevjourney.png";
import cwn from "../assets/cryptoweather.png";
import blogdata from "../assets/blogdata2.png";
import authsystem from "../assets/authsystem.png";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const projectData = {
    1: {
      title: "Blog App",
      image: blogdata,
      description: `This is a blog application where a user can create their own blogs an dview others blogs. The user has their own "My Blog" dashboard where they can view all their blogs. The user can maintain their blogs by update or delete. This application is specifically built for CRUD operations.`,
      header_1: "Technologies Used",
      tech: ["Django", "React Js", "MySQL"],
      header_2: "Key Features",
      feature: [
        `Only the authorised users can perform CRUD operation to their blogs.
            This is done by using Django Rest Framework API.`,
        `The user authentication and authorization is done by JWT(JsonWeb
            Token).`,
      ],
    },
    2: {
      title: "Authentication System",
      image: authsystem,
      description:
        "A user auth system with OTP validation enhances security by requiring a one-time password (OTP) during login or registration. OTPs are temporary codes (usually 4-6 digits) sent to a user's email or phone number and are valid for a short duration.",
      header_1: "Technologies Used",
      tech: ["Node Js", "React Js", "MongoDB"],
      header_2: "Key Features",
      feature: [
        `The authentication system specifically concentrates on user
            verification. This is done by using React and Node Js.`,
        `The user authentication and authorization uses cookies to generate a
            JWT(JasonWeb Token) with OTP validation. This is done to prevent any
            unofficial fake users.`,
      ],
    },
    3: {
      title: "Web Development Journey",
      image: wdj,
      description:
        "An AI-powered learning website is an educational platform that delivers personalized, dynamic learning content using artificial intelligence. It adapts to a learner's needs and provides with a basic AI-generated answers and explanations.",
      header_1: "Technologies Used",
      tech: ["JavaScript", "MySQL"],
      header_2: "Key Features",
      feature: [
        `It is a learning platform that uses AI to provide user with a basic
            explanation of their queries.`,
        `It uses Groq AI to generate answers and explanations.`,
        `Uses a flowchart to help users with their learning journey.`,
      ],
    },
    4: {
      title: "Crypto Weather Nexus",
      image: cwn,
      description:
        "Crypto Weather Nexus is an interactive web dashboard that delivers live insights on both cryptocurrency performance and city weather conditions, offering users a quick glance at two of the most dynamic data streams — finance and climate — in one place.",
      header_1: "Technologies Used",
      tech: ["JavaScript"],
      header_2: "Key Features",
      feature: [
        `A dashboard with live cryptocurrency and city weather data.`,
        `The live data is fetched from APIs like CoinGecko and
            OpenWeatherMap.`,
        `The dashboard is designed to be user-friendly and visually
            appealing.`,
      ],
    },
  };

  const { id } = useParams();
  const project = projectData[id];

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div>
      <p
        onClick={handleBack}
        className="bg-gray-500 w-fit rounded shadow-lg p-2 m-10 hover:bg-gray-600 hover:cursor-pointer"
      >
        &larr; Back
      </p>
      <div className="ml-10 mr-10 lg:p-10 lg:text-xl">
        <div className="flex gap-2 items-center">
          <h2 className="font-bold">Project</h2>
          <p>&gt;</p>
          <p className="text-2xl text-gray-400">{project.title}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-15">
          <div className="lg:w-1/2 text-justify">
            <h1 className="animate-slide-down animate-glow">{project.title}</h1>
            <p className="mt-5 animate-slide-up">{project.description}</p>
            <div className="mt-10 lg:mt-20 animate-slide-right">
              <h2>{project.header_1}</h2>
              <div className="flex flex-col animate-slide-down">
                {project.tech.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <p>&lt;&gt;</p>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 animate-slide-up">
            <img
              src={project.image}
              alt=""
              className="hover:scale-110 transition duration-300"
            />

            <div className="mt-10 lg:mt-20 animate-slide-up-right">
              <h2>{project.header_2}</h2>
              {project.feature.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 text-justify animate-slide-down"
                >
                  <p>&gt;</p>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
