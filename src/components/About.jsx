import React from "react";
import introPic from "../../assets/Intro/introPic.jpg";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-24">
        <div className="flex-1">
          <img
            className="w-full max-h-[600px] origin-bottom -rotate-12 mx-auto rounded-3xl drop-shadow-2xl"
            src={introPic}
            alt="Intro"
          />
        </div>
        <div className="flex-1 mt-16 lg:mt-0 lg:ml-16">
          <p className="text-3xl text-gray-700 font-extrabold text-center mb-5">
            Hi, there
          </p>
          <p className="text-base text-gray-700 mb-4">
            I am dedicated to crafting efficient and user-friendly applications
            that solve real-world problems. Through my experience from Hack
            Reactor, I have gained expertise in various programming languages,
            frameworks, and technologies. From front-end development using HTML,
            CSS, React to back-end development with Python, JavaScript and SQL.
            I have a diverse skill set that allows me to tackle complex projects
            from end to end.
          </p>
          <p className="text-base text-gray-700">
            On this website, you will find a collection of my projects,
            highlighting my problem-solving skills, attention to detail and
            creativity. I invite you to explore my portfolio and get a glimpse
            of my work. If you have any questions or would like to discuss
            potential collaborations, please don't hesitate to reach out. Thank
            you for visiting, and I look forward to connecting with you!
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
