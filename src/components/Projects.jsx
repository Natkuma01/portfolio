import React from "react";
import { Link } from 'react-router-dom'
import hungry from "../../assets/project/hungry.png";
import go from "../../assets/project/go.png";
import parkpro from "../../assets/project/parkpro02.png";
import meTube from "../../assets/project/metube02.png";
import scrumptious from "../../assets/project/scrumptious.png";
import sushi from "../../assets/project/sushi.png";
import figma from "../../assets/project/figma.png";
import stopwatch from "../../assets/project/stopwatch.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      image: hungry,
      title: "Hungry Rabbit",
      description: "A project completed with the Chingu group: a restaurant simulator where users can search for restaurants by state and category, and use virtual coins to purchase food online.",
      badges: ["React", "DaisyUI", "TailwindCSS", "Jira", "Leaflet-map"],
      link: "https://hungry-rabbit.onrender.com",
      figmaLink: figma
    },
    {
      image: sushi,
      title: "Sushi 101",
      description: "An application that teaches about various types of fish and sushi, provides the history of sushi, and includes translations for sushi names.",
      badges: ["React Vite", "Django", "TailwindCSS", "PostgreSQL"],
      link: "https://github.com/Natkuma01/sushi_guide",
    },
    {
      image: parkpro,
      title: "Park Pro",
      description: "A comprehensive platform for users to explore national parks, leave comments, and create trip notes.",
      badges: ["React Vite", "Fast API", "Mongo DB", "MaterialUI"],
      link: "https://gitlab.com/parkpro/parkpro"
    },
    {
      image: meTube,
      title: "MeTube",
      description: "A custom video platform designed with a distinct website layout, resembling a personalized version of YouTube.",
      badges: ["React", "TypeScript"],
      link: "https://natkuma01.github.io/MeTube/"
    },
    {
      image: scrumptious,
      title: "Scrumptious",
      description: "An interactive platform for food lovers. Users can give ratings and share recipes.",
      badges: ["Django", "CSS", "RESTful API", "SQLite"],
      link: "https://natkuma.pythonanywhere.com/recipes/"
    }
  ];

  return (
    <div className="bg-primary h-[2000px]">
      <p className="text-gray-700 font-extrabold text-5xl flex justify-center mt-10">
        Projects
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            badges={project.badges}
            link={project.link}
            figmaLink={project.figmaLink}
          />
        ))}
        <div className="card w-96 shadow-xl m-16">
            <figure>
              <img
                className="h-[300px]"
                src={stopwatch}
                alt="stopwatch_thumbnail"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-gray-700 font-bold">
                Mini Projects
              </h2>
              <div className="inline-flex space-x-2">
                <div className="badge badge-outline">React Vite</div>
                <div className="badge badge-outline">Tailwind CSS</div>
              </div>
              <p className="text-gray-700">
                Small projects using React sush as Hangman, stopwatch and Todo
                List
              </p>
              <div className="card-actions justify-end">
                <Link to="/mini">
                  <img className="h-12" src={go} />
                </Link>
              </div>
            </div>
          </div>
      </div>
      
    </div>
  );
};

export default Projects;
