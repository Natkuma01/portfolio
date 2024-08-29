import React from "react";
import go from "../../assets/project/go.png";


const ProjectCard = ({ image, title, description, badges, link, figmaLink }) => {
  return (
    <div className="card w-96 shadow-xl m-16">
      <figure>
        <img className="h-64" src={image} alt={`${title}_thumbnail`} />
      </figure>
      <div className="card-body">
        <div className="flex flex-row">
          <h2 className="card-title basis-2/3 text-gray-700 font-bold">{title}</h2>
          {figmaLink && (
            <a
              href={figmaLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-10" src={figmaLink} alt="figma_link" />
            </a>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <div key={index} className="badge badge-outline badge-md px-2 py-1 text-sm truncate">
              {badge}
            </div>
          ))}
        </div>
        <p className="text-gray-700">{description}</p>
        <div className="card-actions justify-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12" src={go} alt="go_link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
