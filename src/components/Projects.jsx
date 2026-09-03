import React from "react";
import { Link } from "react-router-dom";
import hungry from "../../assets/project/hungry.png";
import go from "../../assets/project/go.png";
import parkpro from "../../assets/project/parkpro02.png";
import meTube from "../../assets/project/metube02.png";
import scrumptious from "../../assets/project/scrumptious.png";
import sushi from "../../assets/project/sushi.png";
import figma from "../../assets/project/figma.png";
import stopwatch from "../../assets/project/stopwatch.png";
import ProjectCard from "./ProjectCard";
import wine from "../../assets/project/wine.png";
import spaceshipTitanic from "../../assets/project/spaceship-titanic.png";

const Projects = () => {
  const projectData = [
    {
      image: spaceshipTitanic,
      title: "SpaceShip Titanic",
      description:
        "A machine learning project that predicts which passengers were transported using feature engineering, data imputation, and model comparison.",
      badges: ["Python", "scikit-learn", "Pandas", "Jupyter"],
      link: "https://github.com/Natkuma01/spaceship-titanic",
    },
    {
      image: wine,
      title: "Wine Inventory Tracker",
      description:
        "Wine Inventory helps users track their wine bottles and calculate the most optimal selling price. Demo Access: Username: natkuma Password: jebon171",
      badges: ["React", "DaisyUI", "TailwindCSS", "Django", "AWS"],
      link: "http://wine-inventory.duckdns.org/",
    },
    {
      image: hungry,
      title: "Hungry Rabbit",
      description:
        "A project completed with the Chingu group: a restaurant simulator where users can search for restaurants by state and category, and use virtual coins to purchase food online.",
      badges: ["React", "DaisyUI", "TailwindCSS", "Jira", "Leaflet-map"],
      link: "https://hungry-rabbit.onrender.com",
      figmaLink: figma,
    },
    {
      image: sushi,
      title: "Sushi 101",
      description:
        "An application that teaches about various types of fish and sushi, provides the history of sushi, and includes translations for sushi names.",
      badges: ["React Vite", "Django", "TailwindCSS", "PostgreSQL"],
      link: "https://github.com/Natkuma01/sushi_guide",
    },
    {
      image: parkpro,
      title: "Park Pro",
      description:
        "A comprehensive platform for users to explore national parks, leave comments, and create trip notes.",
      badges: ["React Vite", "Fast API", "Mongo DB", "MaterialUI"],
      link: "https://gitlab.com/parkpro/parkpro",
    },
    {
      image: meTube,
      title: "MeTube",
      description:
        "A custom video platform designed with a distinct website layout, resembling a personalized version of YouTube.",
      badges: ["React", "TypeScript"],
      link: "https://natkuma01.github.io/MeTube/",
    },
    {
      image: scrumptious,
      title: "Scrumptious",
      description:
        "An interactive platform for food lovers. Users can give ratings and share recipes.",
      badges: ["Django", "CSS", "RESTful API", "SQLite"],
      link: "https://natkuma.pythonanywhere.com/recipes/",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-gray-800 font-extrabold text-3xl sm:text-4xl md:text-5xl text-center my-6 sm:my-10">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

        {/* Mini Projects Card */}
        <div className="card w-full max-w-sm mx-auto bg-base-100 shadow-xl transition-transform hover:-translate-y-1">
          <figure className="px-4 pt-4">
            <img
              className="h-52 w-full object-cover rounded-xl"
              src={stopwatch}
              alt="stopwatch_thumbnail"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-gray-800 font-bold text-xl">
              Mini Projects
            </h2>
            <div className="flex flex-wrap gap-1.5 my-2">
              <span className="badge badge-outline text-xs px-2 py-1 font-medium">React Vite</span>
              <span className="badge badge-outline text-xs px-2 py-1 font-medium">Tailwind CSS</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Small projects using React such as Hangman, Stopwatch, and Todo List.
            </p>
            <div className="card-actions justify-end mt-4">
              <Link to="/mini" aria-label="Go to Mini Projects">
                <img className="h-10 w-10 object-contain hover:scale-105 transition-transform" src={go} alt="Go link" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
