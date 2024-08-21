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

const images = [
  django,
  fastapi,
  html,
  js,
  postgreSQL,
  python,
  rest,
  reacts,
  tailwind,
  mongodb,
];

const Skill = () => {
  return (
    <div className="h-[2000px]">
      <p className="text-gray-700 text-4xl font-extrabold flex justify-center m-8">
        My Skills
      </p>
      <div className="grid grid-cols-4 m-16 gap-8">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center">
            <img src={src} className="h-32" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
