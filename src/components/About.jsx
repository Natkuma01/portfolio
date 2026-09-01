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
            alt="Natalie Chan"
          />
        </div>
        <div className="flex-1 mt-16 lg:mt-0 lg:ml-16">
          <p className="text-3xl text-gray-700 font-extrabold text-center mb-5">
            I build for people, not just for code.
          </p>
          <p className="text-base text-gray-700 mb-4">
            I&rsquo;m a new graduate software engineer building toward a career in
            AI and machine learning. I develop full-stack applications, explore
            ML through hands-on projects, and use AI tools thoughtfully to learn
            faster, test ideas, and turn concepts into working products.
          </p>
          <p className="text-base text-gray-700 mb-4">
            But technical skills are only part of what I bring.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Before becoming a software engineer, I worked in hospitality, where
            understanding people was the job. I learned how to listen, explain
            ideas clearly, earn trust, and recognize what someone might need
            before they ask for it.
          </p>
          <p className="text-base text-gray-700 mb-4">
            That mindset now shapes how I approach engineering.
          </p>
          <p className="text-base text-gray-700 mb-4">
            I care about more than whether a feature works. I want to understand
            why we are building it, who it is for, and whether it genuinely makes
            someone&rsquo;s life easier. I enjoy collaborating with others,
            talking with users, and translating their needs into practical
            product ideas.
          </p>
          <p className="text-base text-gray-700 mb-4">
            I&rsquo;m curious about how machines learn, excited about where AI is
            heading, and looking for opportunities where I can continue growing
            while contributing as a software engineer from day one.
          </p>
          <p className="text-lg text-gray-700 font-bold">
            Build the product. Understand the people. Make both better.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
