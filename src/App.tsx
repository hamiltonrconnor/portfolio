


import { useContext, useState } from 'react';
import './App.css'

import CardGrid from './components/CardGrid'
import Title from './components/Title'
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';

import { Category } from './assets/data';

import { DarkModeContext } from './utilities/darkModeContext';
import { DarkModeContextType } from './@types/context';



import { useRef } from "react";


function App() {
  const { darkMode } = useContext(DarkModeContext) as DarkModeContextType
  const categories: Array<Category> = Object.values(Category);
  const [filters, setFilter] = useState<Array<Category>>(categories);
  const updateFilter = (filters: Array<Category>) => {
    setFilter(filters);
  };
  const projectRef = document.getElementById("Projects");
  const aboutRef = document.getElementById("AboutMe");
  const aboutSection = useRef(aboutRef);
  const projectSection = useRef(projectRef);




  return (






    <div className={darkMode ? "" : "dark"}>

      <div className={`min-h-screen bg-cream dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black`}>

        <TopBar aboutSection={aboutSection} projectSection={projectSection} />




        <Title title="Hi, I'm Connor  Hamilton!" sub_title="A PhD student in HCI" />





        <div className='px-10 flex flex-row-reverse'>
          <div className='custom-border p-4'>
            <img className="m-10 border-4 custom-border border-slate-900  drop-shadow-hard object-cover h-64 w-64" src='docs/assets/images/HeadShot.jpeg'></img>
          </div>
        </div>

        <div id={"AboutMe"} >
          <Title title="About Me" sub_title="" title_inderline={true} />
        </div>

        <div className="px-5 flex max-w-fit gap-5 justify-between">
          <div className='w-1/2 flex flex-col justify-between'>

            <p className='p-2  text-stone-600 font-extrabold font-mono text-3xl dark:text-white'>I am a PhD Student at the University of Canterbury.  I graduated from the University of Bristol having achieved a First Class Master of Engineering in Computer Science.</p>
            <div className='w-full flex flex-row items-center p-1'>
              <img className="flex-1  w-1/3 p-1" src='docs/assets/images/UniOfCanterbury_Logo.png'></img>
              <img className="flex-1  w-1/3 p-1" src='docs/assets/images/University_of_Bristol_logo.svg.png'></img>
              <img className="flex-1  w-1/3 p-1" src='docs/assets/images/FabLab_Logo.png'></img>

            </div>
          </div>


          <div className='w-1/2 p-auto'>
            <h1 className='font-vergil text-4xl dark:text-white'>What I'm interested in? </h1>
            <img className="font-vergil grow-0 object-contain" src="docs/assets/images/StickyNotes.png"></img>
          </div>
        </div>

        <div id={"Projects"} >
          < Title title="Projects" sub_title="" title_inderline={true} />
        </div>
        <div className="  relative sm:z-0 sm:flex   ">
          <div className=" grid justify-items-center sm:pl-2 ">
            <div>

              <NavBar updateFilter={updateFilter} />
            </div>



          </div>

          <div className='p-5  justify-center '>
            <CardGrid filters={filters} />





          </div>

        </div>
      </div>
    </div >





  )
}



export default App
