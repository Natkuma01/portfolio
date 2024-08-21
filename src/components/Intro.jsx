import React from "react";
import introPic from "../../assets/Intro/introPic.jpg";
import gitLogo from "../../assets/Intro/git.png";
import linkedinLogo from "../../assets/Intro/linkedin.png";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 md:p-24">
      <div className="flex-1">
        <img
          className="max-h-[400px] md:max-h-[600px] origin-bottom -rotate-12 mx-auto md:ml-0 rounded-3xl shadow-2xl"
          src={introPic}
          alt="Intro"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center md:ml-8 my-8 md:my-0">
        <p className="text-zinc-600 font-bold text-3xl md:text-5xl my-2 text-center md:text-left">
          Hi. My name is Natalie Chan
        </p>
        <p className="text-zinc-600 font-bold text-lg md:text-xl my-5 text-center md:text-left">
          I'm a full-stack developer based in New York.
        </p>
        <div className="flex justify-center md:justify-start space-x-5">
          <a
            href="https://www.linkedin.com/in/natalie-chan-shimin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="max-h-10 md:max-h-12 my-5 rounded-lg"
              src={linkedinLogo}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Natkuma01?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="max-h-10 md:max-h-12 my-5 rounded-lg"
              src={gitLogo}
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Intro;
