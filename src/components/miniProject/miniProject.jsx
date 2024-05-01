import React from 'react'
import { Link } from "react-router-dom"

function miniProject() {
  return (
    <>
    <Link to="/portfolio"><p className="text-zinc-200 text-2xl">Home</p></Link>
    <p className="flex items-center justify-center text-violet-200 mt-10 text-4xl mb-14">My Mini Projects</p>
    <div className="bg-zinc-300 mx-12 rounded-lg">
    <div className="flex flex-col ... gap-8 p-5">
    <div className="bg-blue-400 h-16 p-4 rounded-full mt-10 shadow-xl hover:bg-sky-200 ">
    <Link to="https://natkuma01.github.io/mini_project1_stopwatch/"> 
    <p className="text-zinc-200 text-xl font-extrabold px-6 hover:text-zinc-600">Stopwatch</p>
    </Link></div>
    <div className="bg-amber-300 h-16 p-4 rounded-full shadow-xl hover:bg-amber-100">
    <Link to="https://natkuma01.github.io/mini_project2_todoList/"> 
    <p className="text-zinc-400 text-xl font-extrabold hover:text-zinc-600 px-6">To Do List</p>
    </Link></div>
    <div className="bg-blue-400 h-16 p-4 rounded-full mb-10 shadow-xl hover:bg-sky-200">
    <Link to="https://natkuma01.github.io/Hangman/"> 
    <p className="text-zinc-200 text-xl font-extrabold px-6 hover:text-zinc-600">Hangman</p>
    </Link></div>
    </div>
    </div>
    </>
  )
}

export default miniProject