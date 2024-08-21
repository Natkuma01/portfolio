import React from 'react';
import introPic from "../../assets/Intro/introPic.jpg";


const About = () => {
  return (
    <>
     <div className='flex flex-row p-24'>
      <div className='basis-1/2'>
      <img className='max-h-[600px] origin-bottom -rotate-12 ml-40 rounded-3xl drop-shadow-2xl' src={introPic} />
      </div>
      <div className='basis-1/2 ml-16 mt-20'>

    <p className="text-3xl text-gray-700 font-extrabold text-center my-5">Hi, there</p>

    <p className="text-base/7 text-gray-700">I am dedicated to crafting efficient and user-friendly applications that 
      solve real-world problems. Through my experience from Hack Reactor, I have 
      gained expertise in various programming languages, frameworks, and technologies. 
      From front-end development using HTML, CSS, React to back-end development 
      with Python, JavaScript and SQL. I have a diverse skill that allows me to tackle
      complex projects from end to end.</p>

    <p className="text-base/7 text-gray-700">On this website, you will find a collection of my projects, highlighting my 
      problem-solving skills, attention to detail and creactivity. I invite you to explore my 
      portfolio and get a glimpse of my work. If you have any questions or would like to 
      discuss potential collaborations, please don't hesitate to reach out. 
      Thank you for your visiting and I look forward to connecting with you!
    </p>
    </div>
    </div>
  </>
  )
}
export default About;
