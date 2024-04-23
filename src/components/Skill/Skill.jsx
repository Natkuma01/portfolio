import React from 'react';
import Lottie from "lottie-react";
import { getImageUrl } from "../../utils";
import pythonAnimation from "../../../assets/skill/python.json";
import jsAnimation from "../../../assets/skill/JS.json";
import reactAnimation from "../../../assets/skill/react.json";
import cssAnimation from "../../../assets/skill/css.json";


import "./skill.css";


function Skill() {
  return (
    <section id="skills">
      
    <div className="grid grid-cols-5 gap-y-10 justify-center place-items-center justify-items-center pb-20 mt-20">
      <h2 className="text-sky-200 col-span-5 text-center text-5xl head">My Skills</h2>
      <Lottie className="python-logo ..." animationData={pythonAnimation}/>
      <Lottie className="js-logo ..." animationData={jsAnimation}/>
      <Lottie className="react-logo ..." animationData={reactAnimation}/>
      <Lottie className="css-logo ..." animationData={cssAnimation}/>
      <img src={getImageUrl("skill/motion.png")} alt="framer-motion-logo" className="django-logo ..." />
      <img src={getImageUrl("skill/django.jpg")} alt="Django-logo" className="django-logo ..." />
      <img src={getImageUrl("skill/postgreSQL.png")} alt="PostgreSQL-logo" className="django-logo ..." />
      <img src={getImageUrl("skill/sql.jpg")} alt="sql-logo" className="django-logo ..." />
      <img src={getImageUrl("skill/fastapi.png")} alt="fastapi-logo" className="django-logo ..." />
      <img src={getImageUrl("skill/tailwind.webp")} alt="tailwind-logo" className="django-logo ..." />
    </div>
    </section>
  )
};

export default Skill
