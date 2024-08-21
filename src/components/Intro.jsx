import React from 'react';
import introPic from "../../assets/Intro/introPic.jpg";
import gitLogo from "../../assets/Intro/git.png"
import linkedinLogo from "../../assets/Intro/linkedin.png"

const Intro = () => {
  return (
    <div className='flex flex-row p-24'>
      <div className='basis-1/2'><img className='max-h-[600px] origin-bottom -rotate-12 ml-40 rounded-3xl shadow-2xl' src={introPic} /></div>
        <div className='basis-1/2 ml-38 my-32'>
        <p className='text-zinc-600 font-bold text-5xl my-2'>Hi. My name is Natalie Chan</p>
        <p className='text-zinc-600 font-bold text-xl my-5'>I'm a full-stack developer based in New York.</p>
        <div className='inline-flex space-x-5'>
        <a
                href="https://www.linkedin.com/in/natalie-chan-shimin/"
                target="_blank"
                rel="noopener noreferrer"
              >
        <img className='max-h-12 my-5 rounded-lg' src={linkedinLogo} />
        </a>
        <a
                href="https://github.com/Natkuma01?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
        <img className='max-h-12 my-5 rounded-lg' src={gitLogo} />
        </a>
        
        </div>
        </div>
    </div>
  )
}
export default Intro;
