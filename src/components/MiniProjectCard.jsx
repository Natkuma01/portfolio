import React from "react";

const MiniProjectCard = ({ image, title, url }) => {
  return (
    <div className="group relative w-full h-64 sm:h-72 rounded-2xl shadow-xl overflow-hidden bg-zinc-900">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-40 transition-all duration-300"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent sm:opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-secondary text-2xl sm:text-3xl font-extrabold tracking-wide drop-shadow-md">
          {title}
        </p>
        <div className="flex justify-end mt-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="btn bg-secondary text-gray-800 hover:bg-neutral font-bold border-none shadow-md">
              Try ME
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniProjectCard;
