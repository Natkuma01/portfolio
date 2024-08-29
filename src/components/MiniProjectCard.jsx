import React from "react";

const MiniProjectCard = ({ image, title, url }) => {
  return (
    <div className="group relative w-full h-72 rounded-2xl shadow-2xl">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full rounded-2xl object-fill group-hover:opacity-30 transition-opacity duration-300"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-between rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        <p className="text-secondary m-5 text-3xl font-extrabold">
          {title}
        </p>
        <div className="card-actions flex justify-end mt-auto p-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn bg-secondary text-gray-700 hover:text-secondary">
              Try ME
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniProjectCard;
