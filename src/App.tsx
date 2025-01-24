


import { useContext } from 'react';
import './App.css'

import Pdf from '../public/docs/assets/Documents/Connor Hamilton CV .pdf';

// import CardGrid from './components/CardGrid'
import Title from './components/Title'
// import NavBar from './components/NavBar';
import TopBar from './components/TopBar';

// import { Category } from './assets/data';

import { DarkModeContext } from './utilities/darkModeContext';
import { DarkModeContextType } from './@types/context';



import { useRef } from "react";
// import Contact from './components/Contact';
// import Block from './components/Block';
import AltBlock from './components/AltBlock';


function App() {
  const { darkMode } = useContext(DarkModeContext) as DarkModeContextType
  // const categories: Array<Category> = Object.values(Category);
  // const [filters, setFilter] = useState<Array<Category>>(categories);
  // const updateFilter = (filters: Array<Category>) => {
  //   setFilter(filters);
  // };


  const projectSection = useRef<HTMLElement | null>(null);
  const aboutSection = useRef<HTMLElement | null>(null);
  // const contactSection = useRef<HTMLElement | null>(null);



  return (





    <div className={darkMode ? "" : "dark"}>


      <div className={`min-h-screen bg-cream dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black`}>
        <div className=' bg-[linear-gradient(to_right,#78716C0a_1px,transparent_1px),linear-gradient(to_bottom,#78716C0a_1px,transparent_1px)] bg-[size:25px_25px] '>
          <div className='flex justify-center '>
            <div className='w-full max-w-5xl'>
              <TopBar aboutSection={aboutSection} projectSection={projectSection} />




              <section >
                <div className=''>
                  <Title title="Hi, I'm Connor  Hamilton!" sub_title="A PhD student in HCI" />
                  <div className=' flex  flex-row-reverse'>
                    <div className='custom-border p-4'>
                      <img className="m-10 border-4 custom-border border-slate-900  drop-shadow-hard object-cover h-64 w-64" src='docs/assets/images/HeadShot.jpeg'></img>
                    </div>
                  </div>

                </div>
              </section>

              <section ref={aboutSection} id={"AboutMe"} >
                <Title title="About Me" sub_title="" title_inderline={true} />
              </section>

              <div className="px-5 flex max-w-fit gap-5 justify-between">
                <div className='w-1/2 flex flex-col justify-between'>

                  <p className='p-2  text-stone-600 font-quicksand text-3xl dark:text-white'>I am a PhD Student at the University of Canterbury.  I graduated from the University of Bristol having achieved a First Class Master of Engineering in Computer Science.</p>
                  <div className='w-full flex flex-row items-center p-1'>
                    <img className="flex-1  w-1/3 p-1" src='docs/assets/images/UniOfCanterbury_Logo.png'></img>
                    <img className="flex-1  w-1/3 p-1" src='docs/assets/images/University_of_Bristol_logo.svg.png'></img>
                    <img className="flex-1  w-1/3 p-1" src='docs/assets/images/FabLab_Logo.png'></img>

                  </div>
                </div>


                <div className='w-1/2 p-auto'>

                  <img className="font-vergil grow-0 object-contain" src="docs/assets/images/3Dprinter.svg"></img>
                </div>
              </div>
              <section ref={projectSection} id={"Experience"} >
                < Title title="Experience" sub_title="" title_inderline={true} />
              </section>
              <ol className=' relative mx-8 border-l-4 border-stone-300 '>
                <li>
                  <div className='absolute mt-4 w-4 h-4 bg-stone-400 rounded-full -translate-x-2.5' ></div>
                  <AltBlock company='Wearables for Physiotherapy' job_title='PhD Position' dates="April 2024 to March 2025" skills={["Python"]}>
                    <p>Rehabilitation devices are dominated by one-size-fits-all systems that fail to provide the level of customisation required to meet patients’ needs. Working with physiotherapists, I am using flexible 3D printing to build wearable systems. This allows the creation of bespoke devices tailored to the individual needs of the clinician and patients.</p>
                  </AltBlock>
                </li>
                <li>
                  <div className='absolute mt-4 w-4 h-4 bg-stone-300 rounded-full -translate-x-2.5' ></div>
                  <AltBlock company=' Spark Data Systems' job_title='Junior Software Developer' dates="October 2023 to March 2024" skills={[".Net", "T-SQL", "Azure Cloud Computing"]}>
                    Spark Data System specialises in the maintenance and replacement of legacy systems across the insurance, hospitality and public service sectors. Key achievements from this role:
                    <ul className="list-disc list-outside mx-4 ">
                      <li>Developed full stack browser based applications using both the modern .NET 8 Blazor framework and legacy ASP.NET WebForms.</li>
                      <li>Built normalised T-SQL databases.</li>
                      <li>Deployed applications with Azure Pipelines to Azure Cloud Computing Services.</li>
                    </ul>
                  </AltBlock>
                </li>
                <li>
                  <div className='absolute mt-4 w-4 h-4 bg-stone-300 rounded-full -translate-x-2.5' ></div>
                  <AltBlock company='Barclays Bank' job_title='Technology Developer Intern' dates="July 2021 to September 2021" skills={["Java", "Springboot"]}>
                    Barclays wanted to allow users to manage subscription services on their existing app using 3rd party organisation Zuora service. I worked within the team, building an API gateway enabling integration to the Barclays micro service architecture. Two problems I solved were:
                    <ul className="list-disc list-outside mx-4">
                      <li>The REST client used to work with the Zuora API did not comply with Barclays’ internal standards. I solved this by adding an additional layer in the form of a Springboot API that used the Barclays standard REST client. I delivered this ahead of deadline and exceeded the expectations of my supervisor by delivering against a stretching project.</li>
                      <li>I improved JUnit test class coverage by 21% within the existing project. Firstly, I familiarised myself with the code base using walk through and Q&A sessions with members of the team as well as generating sequence diagrams and reading through documentation. I was then able to write relevant tests to check the code worked as intended.</li>
                    </ul>
                  </AltBlock>
                </li>

              </ol>


              <h1 className='p-8 font-vergil text-2xl'>For further details checkout my CV
                < a className="text-sky-500 hover:text-sky-300" href={Pdf} rel="noopener noreferrer" target="_blank"> here</a>.
              </h1>

              {/* <div className=''>
                <div></div>
                <Block company='Wearables for Physiotherapy' job_title='PhD Position' dates="April 2024 to March 2025" skills={["Python"]}>
                  <p>Rehabilitation devices are dominated by one-size-fits-all systems that fail to provide the level of customisation required to meet patients’ needs. Working with physiotherapists, I am using flexible 3D printing to build wearable systems. This allows the creation of bespoke devices tailored to the individual needs of the clinician and patients.</p>
                </Block>
                <Block company=' Spark Data Systems' job_title='Junior Software Developer' dates="October 2023 to March 2024" skills={[".Net", "T-SQL", "Azure Cloud Computing"]}>
                  Spark Data System specialises in the maintenance and replacement of legacy systems across the insurance, hospitality and public service sectors. Key achievements from this role:
                  <ul className="list-disc list-outside mx-4">
                    <li>Developed full stack browser based applications using both the modern .NET 8 Blazor framework and legacy ASP.NET WebForms.</li>
                    <li>Built normalised T-SQL databases.</li>
                    <li>Deployed applications with Azure Pipelines to Azure Cloud Computing Services.</li>
                  </ul>
                </Block>

                <Block company='Barclays Bank' job_title='Technology Developer Intern' dates="July 2021 to September 2021" skills={["Java", "Springboot"]}>
                  Barclays wanted to allow users to manage subscription services on their existing app using 3rd party organisation Zuora service. I worked within the team, building an API gateway enabling integration to the Barclays micro service architecture. Two problems I solved were:
                  <ul className="list-disc list-outside mx-4">
                    <li>The REST client used to work with the Zuora API did not comply with Barclays’ internal standards. I solved this by adding an additional layer in the form of a Springboot API that used the Barclays standard REST client. I delivered this ahead of deadline and exceeded the expectations of my supervisor by delivering against a stretching project.</li>
                    <li>I improved JUnit test class coverage by 21% within the existing project. Firstly, I familiarised myself with the code base using walk through and Q&A sessions with members of the team as well as generating sequence diagrams and reading through documentation. I was then able to write relevant tests to check the code worked as intended.</li>
                  </ul>

                </Block>
              </div> */}




              <div className="h-96"></div>
            </div>
          </div>

        </div>
      </div>

    </div >







  )
}



export default App
