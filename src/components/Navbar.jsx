import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import menuBurger from '../../assets/nav/menuBurger.png'
import cross from '../../assets/nav/cross.png'
 

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }


  return (
  <>
  <div className='bg-secondary h-16 flex flex-row'>
    <Link to='/portfolio' className='text-gray-700 font-extrabold text-3xl py-3 px-10 basis-1/2'>Home</Link>
    <div className='basis-1/2 relative flex justify-end mx-8'>
    <img src={ isOpen ? cross : menuBurger}
        onClick={handleClick}
        className='max-h-10 my-3 opacity-25 cursor-pointer'
      />
      <div className={`${
          isOpen ? "block" : "hidden"
        } absolute mt-16 mx-8 bg-zinc-200 opacity-80 p-5 z-10`}
      >
        <Link to='/about' 
          className='flex justify-center font-bold my-2 text-lg text-zinc-500 hover:text-gray-700 hover:text-xl hover:font-extrabold'
          >About Me</Link>
        <Link to='/projects' 
          className='flex justify-center font-bold my-2 text-lg text-zinc-500 hover:text-gray-700 hover:text-xl hover:font-extrabold'
          >My Projects</Link>
        <Link to='/skill' 
          className='flex justify-center font-bold my-2 text-lg text-zinc-500 hover:text-gray-700 hover:text-xl hover:font-extrabold'
          >My Skills</Link>
        <Link to='/contact' 
          className='flex justify-center font-bold my-2 text-lg text-zinc-500 hover:text-gray-700 hover:text-xl hover:font-extrabold'
          >Contact Me</Link>
      </div>
    </div>
  </div>
  </>
  );
};

export default Navbar;
