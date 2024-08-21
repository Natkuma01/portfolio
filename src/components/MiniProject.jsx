import React from 'react';
import hangman from '../../assets/project/hangman.png';
import stopwatch from '../../assets/project/stopwatch.png';
import todo from '../../assets/project/todo.png'

const MiniProject = () => {
    return (
        <div className='min-h-screen p-4 m-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Hangman */}
                <div className="group relative rounded-2xl w-full h-72 shadow-2xl">
                    <div className="absolute inset-0">
                        <img
                            src={hangman}
                            alt="hangman"
                            className="w-full h-full rounded-2xl object-fill group-hover:opacity-30 transition-opacity duration-300"
                        />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-between rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                        <p className="text-secondary m-5 text-3xl font-extrabold">Hangman</p>
                        <div className="card-actions flex justify-end mt-auto p-4">
                        <a
                href="https://natkuma01.github.io/Hangman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                            <button className="btn bg-secondary text-gray-700 hover:text-secondary">Try ME</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* stopwatch */}
                <div className="group relative w-full h-72 rounded-2xl shadow-2xl">
                    <div className="absolute inset-0">
                        <img
                            src={stopwatch}
                            alt="hangman"
                            className="w-full h-full rounded-2xl object-fill group-hover:opacity-30 transition-opacity duration-300"
                        />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-between rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                        <p className="text-secondary m-5 text-3xl font-extrabold">Stopwatch</p>
                        <div className="card-actions flex justify-end mt-auto p-4">
                        <a
                href="https://natkuma01.github.io/mini_project1_stopwatch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                            <button className="btn bg-secondary text-gray-700 hover:text-secondary">Try ME</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Todo List */}
                <div className="group relative w-full h-72 rounded-2xl shadow-2xl">
                    <div className="absolute inset-0">
                        <img
                            src={todo}
                            alt="hangman"
                            className="w-full h-full rounded-2xl object-fill group-hover:opacity-30 transition-opacity duration-300"
                        />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-between rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                        <p className="text-secondary m-5 text-3xl font-extrabold">Todo List</p>
                        <div className="card-actions flex justify-end mt-auto p-4">
                        <a
                href="https://natkuma01.github.io/mini_project2_todoList/"
                target="_blank"
                rel="noopener noreferrer"
              >
                            <button className="btn bg-secondary text-gray-700 hover:text-secondary">Try ME</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Add more items here in the future */}
            </div>
        </div>
    );
};

export default MiniProject;
