import React from "react";
import hangman from "../../assets/project/hangman.png";
import stopwatch from "../../assets/project/stopwatch.png";
import todo from "../../assets/project/todo.png";
import MiniProjectCard from "./MiniProjectCard";

const MiniProject = () => {
  const projects = [
    {
      image: hangman,
      title: "Hangman",
      url: "https://natkuma01.github.io/Hangman/",
    },
    {
      image: stopwatch,
      title: "Stopwatch",
      url: "https://natkuma01.github.io/mini_project1_stopwatch/",
    },
    {
      image: todo,
      title: "Todo List",
      url: "https://natkuma01.github.io/mini_project2_todoList/",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-gray-800 text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12">
        Mini Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <MiniProjectCard
            key={index}
            image={project.image}
            title={project.title}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniProject;
