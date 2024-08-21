import React from "react";
import { Link } from "react-router-dom";
import hungry from "../../assets/project/hungry.png";
import go from "../../assets/project/go.png";
import parkpro from "../../assets/project/parkpro02.png";
import meTube from "../../assets/project/metube02.png"
import scrumptious from "../../assets/project/scrumptious.png"
import sushi from "../../assets/project/sushi.png"
import figma from "../../assets/project/figma.png"
import stopwatch from "../../assets/project/stopwatch.png"

const Projects = () => {
  return (
    <>
      <div className="bg-primary h-[2000px]">
        <p className='text-gray-700 font-extrabold text-5xl flex justify-center mt-10'>Projects</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* hungry rabbit */}
        <div className="card w-96 shadow-xl m-16">
          <figure>
            <img className='h-64' src={hungry} alt="hungry_rabbit_thumbnail" />
          </figure>
          <div className="card-body">
          <div className="flex flex-row">
            <h2 className="card-title basis-2/3 text-gray-700 font-bold">Hungry Rabbit</h2>
            <a
                href="https://www.figma.com/design/ouC7NcFiD1pBfa2UKNv71i/Hungry-Rabbit?node-id=166-2&t=xa2ch0z9rIDLgazy-0"
                target="_blank"
                rel="noopener noreferrer"
              >
            <img className='h-10'src={figma} />
            </a>
            </div>
            <div className="inline-flex space-x-2">
            <div className="badge badge-outline">React</div>
            <div className="badge badge-outline">DaisyUI</div>
            <div className="badge badge-outline">TailwindCSS</div>
            </div>
            <div className="inline-flex space-x-2">
            <div className="badge badge-outline">Jira</div>
            <div className="badge badge-outline">Leaflet-map</div>
            </div>



            <p className="text-gray-700">
              
A project completed with the Chingu group: a restaurant simulator where users can search 
for restaurants by state and category, and use virtual coins to purchase food online.
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://hungry-rabbit.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-12" src={go} />
              </a>
            </div>
          </div>
        </div>
        {/* sushi 101 */}
        <div className="card w-96 shadow-xl m-16">
          <figure>
            <img className='h-64' src={sushi} alt="sushi_thumbnail" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-700 font-bold">Sushi 101</h2>
            <div className="inline-flex space-x-2">
            <div className="badge badge-outline">React Vite</div>
            <div className="badge badge-outline">Django</div>
            <div className="badge badge-outline">TailwindCSS</div>
            </div>
            <div className="badge badge-outline">PostgreSQL</div>

            <p className="text-gray-700">
            An application that teaches about various types of fish and sushi, provides the history of sushi, 
            and includes translations for sushi names.
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://hungry-rabbit.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-12" src={go} />
              </a>
            </div>
          </div>
        </div>
        {/* parkpro */}
        <div className="card w-96 shadow-xl m-16">
          <figure>
            <img src={parkpro} alt="parkpro_thumbnail" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-700 font-bold">Park Pro</h2>
            <div className="inline-flex space-x-2">
            <div className="badge badge-outline">React Vite</div>
            <div className="badge badge-outline">Fast API</div>
            <div className="badge badge-outline">Mongo DB</div></div>
            <div className="badge badge-outline">MaterialUI</div>
          
            <p className="text-gray-700">
            A comprehensive platform for user to explore national parks, leave comments
            and create trip notes 
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://gitlab.com/parkpro/parkpro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-10" src={go} />
              </a>
            </div>
          </div>
        </div>
        {/* Metube */}
        <div className="card w-96 shadow-xl m-16">
          <figure>
            <img src={meTube} alt="meTube_thumbnail" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-700 font-bold">MeTube</h2>
            <div className="inline-flex space-x-2">
            <div className="badge badge-outline">React</div>
            <div className="badge badge-outline">TypeScript</div>
          </div>
            <p className="text-gray-700">
            A custom video platform designed with a distinct website layout, resembling a personalized version of
            YouTube.
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://natkuma01.github.io/MeTube/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-12" src={go} />
              </a>
            </div>
          </div>
        </div>
        {/* scrumptious */}
        <div className="card w-96 shadow-xl m-16">
          <figure>
            <img src={scrumptious} alt="scrumptious_thumbnail" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-700 font-bold">Scrumptious</h2>
            <div className="inline-flex space-x-2">
            <div className="badge badge-outline">Django</div>
            <div className="badge badge-outline">CSS</div>
            <div className="badge badge-outline">RESTful API</div>
            </div>
            <div className="badge badge-outline">SQLite</div>

            <p className="text-gray-700">
            An interactive platform for food lovers. User can give ratings and recipe sharing options
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/Natkuma01/Scrumptious"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-12" src={go} />
              </a>
            </div>
          </div>
        </div>
        {/* mini project */}
        <div className="card w-96 shadow-xl m-16">
          <figure>
            <img className='h-[300px]' src={stopwatch} alt="stopwatch_thumbnail" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-700 font-bold">Mini Projects</h2>
            <div className="inline-flex space-x-2">
            <div className="badge badge-outline">React Vite</div>
            <div className="badge badge-outline">Tailwind CSS</div>
          </div>
            <p className="text-gray-700">
            Small projects using React sush as Hangman, stopwatch and Todo List
            </p>
            <div className="card-actions justify-end">
              <Link to='/mini' >
                <img className="h-12" src={go} />
                </Link>
            </div>
          </div>
        </div>       
        </div>
      </div>
    </>
  );
};
export default Projects;
