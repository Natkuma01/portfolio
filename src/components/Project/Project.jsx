import React from 'react';

import { getImageUrl } from "../../utils";
import "./project.css";


export const Project = () => {
  return (
    <section id="projects">
    <div className="grid grid-rows-4 grid-flow-col gap-x-14 customize">
      <h2 className="col-span-3 text-violet-200 text-5xl text-center head">Projects</h2>
      <div className="row-span-3 ...">
      <a href="https://natkuma01.github.io/MeTube/"
        target="_blank" 
        rel="noopener noreferrer">
        <img src={getImageUrl("project/metube01.png")} alt="thumbnail" className="thumbnail" /></a> 
      </div>
      <p className="col-span-2 ... text-violet-200 text-2xl font-bold">
        MeTube
      </p>
      <p className="row-span col-span-2 ... text-violet-200">
        A custom video platform designed with a distinct website layout, resembling a personalized version of
        YouTube. Allow users to search for videos and present related videos
      </p>
    </div>

    <div className="grid grid-rows-3 grid-flow-col gap-x-14 customize">
      <div className="row-span-3 ...">
        <a href="https://natkuma.pythonanywhere.com/recipes/" 
        target="_blank" 
        rel="noopener noreferrer">
        <img src={getImageUrl("project/scrumptious.png")} alt="thumbnail" className="thumbnail" />
        </a>
      </div>
      <p className="col-span-2 ... text-violet-200 text-2xl font-bold">
          Scrumptious
      </p>
      <p className="row-span col-span-2 ... text-violet-200">
        An interactive platform for culinary enthusiasts and food lovers. It provides a wide range of recipes and
        inspiration for users to explore. It has features such as user ratings and recipe sharing options
      </p>
    </div>
    
    <div className="grid grid-rows-3 grid-flow-col gap-x-14 customize">
      <div className="row-span-3 ..." >
        <a href="https://gitlab.com/parkpro/parkpro" 
        target="_blank" 
        rel="noopener noreferrer">
      <img src={getImageUrl("project/parkpro03.png")} alt="thumbnail" className="thumbnail"/ >
      </a>
      </div>
      <p className="col-span-2 ... text-violet-200 text-2xl font-bold">
        ParkPro
      </p>
      <p className="row-span col-span-2 ... text-violet-200">
        A comprehensive platform for user to explore national parks. User can leave comments for each parks
        and create personalized trip notes to enhance their park experience
      </p>
    </div>
    </section>
  )
};
