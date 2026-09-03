import React from "react";
import django from "../../assets/skill/django.png";
import fastapi from "../../assets/skill/fastapi.png";
import html from "../../assets/skill/html.png";
import js from "../../assets/skill/js.png";
import postgreSQL from "../../assets/skill/postgreSQL.png";
import python from "../../assets/skill/python.png";
import rest from "../../assets/skill/rest.png";
import reacts from "../../assets/skill/reacts.png";
import tailwind from "../../assets/skill/tailwind.webp";
import mongodb from "../../assets/skill/mongodb.png";

const skills = [
  { name: "Django", src: django },
  { name: "FastAPI", src: fastapi },
  { name: "HTML5", src: html },
  { name: "JavaScript", src: js },
  { name: "PostgreSQL", src: postgreSQL },
  { name: "Python", src: python },
  { name: "REST API", src: rest },
  { name: "React", src: reacts },
  { name: "Tailwind CSS", src: tailwind },
  { name: "MongoDB", src: mongodb },
];

const Skill = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-gray-800 text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12">
        My Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white/60 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="h-20 sm:h-24 w-20 sm:w-24 object-contain mb-3"
            />
            <span className="text-gray-700 font-semibold text-sm sm:text-base text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
