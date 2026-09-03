import React from "react";
import go from "../../assets/project/go.png";

const ProjectCard = ({ image, title, description, badges, link, figmaLink }) => {
  return (
    <div className="card w-full max-w-sm mx-auto bg-base-100 shadow-xl transition-transform hover:-translate-y-1">
      <figure className="px-4 pt-4">
        <img
          className="h-52 w-full object-cover rounded-xl"
          src={image}
          alt={`${title}_thumbnail`}
        />
      </figure>
      <div className="card-body p-6">
        <div className="flex items-center justify-between gap-2">
          <h2 className="card-title text-gray-800 font-bold text-xl">{title}</h2>
          {figmaLink && (
            <a
              href={figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Figma design link"
            >
              <img className="h-8 w-8 object-contain" src={figmaLink} alt="Figma link" />
            </a>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5 my-2">
          {badges.map((badge, index) => (
            <span key={index} className="badge badge-outline text-xs px-2 py-1 font-medium">
              {badge}
            </span>
          ))}
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        <div className="card-actions justify-end mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit project ${title}`}
          >
            <img className="h-10 w-10 object-contain hover:scale-105 transition-transform" src={go} alt="Visit link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
