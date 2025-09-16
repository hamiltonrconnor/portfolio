

import { useState } from "react";
import { useContext } from 'react';
import './App.css'

import Pdf from '../public/docs/assets/Documents/Connor Hamilton CV .pdf';

// import CardGrid from './components/CardGrid'
import Title from './components/Title'
// import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import ProjectBlock from './components/ProjectBlock';
// import TitleAnimation from "./components/TitleAnimation";

// import { Category } from './assets/data';

import { DarkModeContext } from './utilities/darkModeContext';
import { DarkModeContextType } from './@types/context';


import { useRef } from "react";
// import Contact from './components/Contact';
// import Block from './components/Block';
import AltBlock from './components/AltBlock';

import useWindowDimensions from './utilities/useWindowDimensions'
import Circle from "./components/Shapes";


function App() {
  const { darkMode } = useContext(DarkModeContext) as DarkModeContextType
  // const categories: Array<Category> = Object.values(Category);
  // const [filters, setFilter] = useState<Array<Category>>(categories);
  // const updateFilter = (filters: Array<Category>) => {
  //   setFilter(filters);
  // };

  const experienceSection = useRef<HTMLElement | null>(null);
  const projectSection = useRef<HTMLElement | null>(null);
  const aboutSection = useRef<HTMLElement | null>(null);
  // const contactSection = useRef<HTMLElement | null>(null);

  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(!showResults)


  const { width } = useWindowDimensions();





  return (






    <div className={darkMode ? "" : "dark"}>


      <div className={`min-h-screen bg-cream dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black`}>
        <div className=' bg-[linear-gradient(to_right,#78716C0a_1px,transparent_1px),linear-gradient(to_bottom,#78716C0a_1px,transparent_1px)] bg-[size:25px_25px] '>
          <div className='flex justify-center '>
            <div className='w-full max-w-5xl'>
              <TopBar aboutSection={aboutSection} projectSection={projectSection} experinceSection={experienceSection} />




              <section >
                <div className=''>

                  <Title title="Hi, I'm Connor  Hamilton!" sub_title="Junior Software Developer" />
                  <div className=' flex  flex-row-reverse'>
                    <div className='custom-border p-4'>
                      <img className="m-10 border-4 custom-border border-slate-900  drop-shadow-hard object-cover h-64 w-64" src='docs/assets/images/HeadShot.avif'></img>
                    </div>
                  </div>
                  <div>
                    <p className="text-stone-600 font-quicksand text-xl  p-8">Get in contact via hamiltonrconnor@gmail.com or <a href="https://www.linkedin.com/in/hamitonrconnor/" className="text-blue-500 hover:text-blue-300 ">Linkedin</a></p>
                  </div>

                </div>
              </section>

              <section ref={aboutSection} id={"AboutMe"} >
                <Title title="About Me" sub_title="" title_inderline={true} />
              </section>

              <div className="px-5 flex max-w-fit gap-5 justify-between">
                <div className='w-1/2 flex flex-col justify-between'>

                  <p className='p-2  text-stone-600 font-quicksand lg:text-3xl  md:text-2xl sm:text-xl dark:text-white'>Junior Software Developer with a First Class Master of Computer Science from a Top UK university. Seeking full-time opportunities to build software that makes a difference.</p>
                  <div className='w-full flex flex-row items-center p-1'>
                    <img className="flex-1  w-1/3 p-1" src='docs/assets/images/UniOfCanterbury_Logo.avif'></img>
                    <img className="flex-1  w-1/3 p-1" src='docs/assets/images/University_of_Bristol_logo.avif'></img>
                    <img className="flex-1  w-1/3 p-1" src='docs/assets/images/FabLab_Logo.avif'></img>

                  </div>
                </div>


                <div className='w-1/2 p-auto'>

                  <img loading="lazy" className="font-vergil grow-0 object-contain" src="docs/assets/images/3Dprinter.avif"></img>
                </div>
              </div>
              <section ref={experienceSection} id={"Experience"} >
                < Title title="Experience" sub_title="" title_inderline={true} />
              </section>
              <ol className=' relative mx-8 border-l-4 border-stone-300 '>
                <li>
                  <div className='absolute mt-4 w-4 h-4 rounded-full -translate-x-[21px] -translate-y-3 stroke-stone-600 fill-stone-300 '><Circle></Circle></div>
                  <AltBlock company='University of Canterbury' job_title='Postgraduate Researcher' dates="March 2024 to March 2025" skills={["Python"]}>
                    <ul className="list-disc list-outside mx-4 ">
                      <li>Led a PhD project designing wearable rehab devices with seven physiotherapists to understand patient and clinician needs. </li>
                      <li>Developed a prototype shoulder brace using flexible 3D Printing with patient-specific motion limits, by converting non-technical requirements into functional, iterative prototypes, enabling greater freedom in safe directions while restricting harmful movements.</li>
                    </ul>
                  </AltBlock>
                </li>
                <li>
                  <div className='absolute mt-4 w-4 h-4 rounded-full -translate-x-[21px] -translate-y-3 fill-stone-300  '><Circle></Circle></div>
                  <AltBlock company='Spark Data Systems' job_title='Junior Software Developer' dates="October 2023 to March 2024" skills={[".Net", "T-SQL", "Azure Cloud Computing"]}>
                    <ul className="list-disc list-outside mx-4 ">
                      <li>Developed full stack browser based applications using both the modern .NET 8 Blazor framework and legacy ASP.NET WebForms, with normalised T-SQL databases.</li>
                      <li> Deployed applications with Azure Pipelines to Azure Cloud Computing Services.</li>
                      <li>Took on the leadership of Junior Developer daily standups to foster shared learning.</li>
                    </ul>
                  </AltBlock>
                </li>
                <li>
                  <div className='absolute mt-4 w-4 h-4 rounded-full -translate-x-[21px] -translate-y-3 fill-stone-300  '><Circle></Circle></div>
                  <AltBlock company='Freelance' job_title='Creative Technologist' dates="May 2023 to September 2023" skills={[]}>
                    <ul className="list-disc list-outside mx-4 ">
                      <li>Built pneumatic valve systems for six 3m-tall inflatable robots exhibited in Bristol’s Playable Cities program (AirGiants).</li>
                      <li>Facilitated user playtesting sessions to gather user feedback, and support iterative improvements to the interaction design (AirGiants). </li>
                      <li>Co-developed an interactive bus stop installation to promote commuter engagement during a Make Shift Creative Camp residency (Pervasive Media Studio).</li>
                    </ul>
                  </AltBlock>
                </li>
                <li>
                  <div className='absolute mt-4 w-4 h-4 rounded-full -translate-x-[21px] -translate-y-3 fill-stone-300 '><Circle></Circle></div>

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

              <section ref={projectSection} id={"Projects"} >
                <Title title="Projects" sub_title="" title_inderline={true} />
              </section>




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

              <div className='px-8 flex flex-row flex-wrap gap-4 justify-center'>


                <ProjectBlock mask="mask1" title="BirdGang" sub_tile='Group Games Project' skills={["C#", "Unity", "Github Actions"]} bg_color="bg-pastel-blue" bg_color_plus="bg-blue-500" left_side={true}>
                  <div className='font-quicksand pt-2'>Developed a 3D browser based game using the Unity game engine. Resulting in a 1st class mark and feedback that the project was “judged as outstanding by the panel entering truly professional territory”.
                    As the lead programmer I was responsible for:
                    <ul className="list-disc list-outside mx-4 ">
                      <li>Establishing ways of working that allowed effective group collaboration. For example, a vertical slice approach(ensuring that an individual could develop a new feature), creating an environment for open sharing of feedback and weekly sprints. </li>
                      <li>Overseeing all of the sub-teams to ensure that systems would integrate efficiently.</li>
                      <li>Providing “hands on” assistance and advice to individuals to debug and solve problems.  </li>
                    </ul>
                  </div>
                </ProjectBlock>

                <ProjectBlock mask="mask2" title="Giant Inflatable Hugging Robots" sub_tile='Master’s thesis' skills={[]} bg_color="bg-pastel-red" bg_color_plus="bg-red-500" left_side={false}>
                  <div className='font-quicksand pt-2'> Creating 6ft plus inflatable robots is an emerging research area. These robots are powered by bouncy castle blowers and by opening valves, pressure chambers are filled causing the robot to move. I identified a gap within the existing research and applied a user-centric approach to investigating hugging interactions with these robots.
                    Key project achievements:
                    <ul className="list-disc list-outside mx-4 ">
                      <li>Feedback for the project commented that I worked in “uncharted territory” and this work could “be part of a published paper”.</li>
                      <li> Developed a low-cost low-pressure pneumatic joint system controlled using a custom 3D printed valves.</li>
                    </ul>
                  </div>
                </ProjectBlock>

                <ProjectBlock mask="mask3" title="Biologically plausible deep learning library" sub_tile='' skills={["Python", "Numpy", "Machine Learning"]} bg_color="bg-pastel-green" bg_color_plus="bg-green-500" left_side={true}>
                  <div className='font-quicksand pt-2'>
                    Traditional machine learning methods have little evidence of biological plausibility. I wrote a library following the scikit-learn conventions that implement the backpropagation, asynchronous backpropagation, feedback alignment and weight mirroring algorithms for training neural networks. These algorithms are able to successfully classify the Fashion_MNIST dataset.
                  </div>
                </ProjectBlock>



                {showResults || width < 1024 ?

                  <ProjectBlock mask="mask1" title="Device energy modelling" sub_tile='' skills={["Java", "Springboot", "React", "Tailwindcss", "Github Actions"]} bg_color="bg-pastel-orange" bg_color_plus="bg-orange-500" left_side={false}>
                    <div className='font-quicksand pt-2'>
                      Working with DIMPACT (a collaboration between the University of Bristol and Carnstone consultancy), I and three other students developed a more sophisticated end-user device energy model to support carbon reduction strategies using an Agile methodology.
                      My personal key achievements within this project:
                      <ul className="list-disc list-outside mx-4 ">
                        <li>Implementing a CI/CD pipeline using AWS and GitHub Actions allowing the team to deploy automatically tested code quickly.</li>
                        <li>Led the development of the Backend Springboot API including the implementation of a concurrent request system that reduced response time from over 20 seconds to a fraction of a second.</li>
                      </ul>


                    </div>
                  </ProjectBlock> : <></>}
                {showResults || width < 1024 ?
                  <ProjectBlock mask="mask3" title="Audio genre classification with PyTorch" sub_tile='' skills={["Python", "Numpy", "Machine Learning", "PyTorch"]} bg_color="bg-pastel-purple" bg_color_plus="bg-violet-500" left_side={true}>
                    <div className='font-quicksand pt-2'>
                      Working in a small team, we explored how using pre-trained deep convolutional neural networks like DenseNet can be applied to audio spectrograms and compared the genre classification performance to much shallower networks. This improved testing accuracy from 63% to 78%.
                    </div>
                  </ProjectBlock>
                  : <></>}
                {width > 1024 ?
                  <button className='p-8 font-vergil text-2xl hover:text-stone-600 hover:underline' onClick={onClick}>
                    {showResults ?
                      <p>Hide projects</p> :
                      <p>See more projects</p>
                    }



                  </button> : <></>
                }
                {/* <h1>{fullConfig.theme.screens.md}</h1> */}




                {/* <div className='w-full h-64 col-span-3 bg-pastel-red rounded-2xl'>

                </div>

                <div className=' w-full h-64 col-span-3 bg-pastel-green rounded-2xl'>

                </div> */}
              </div>






              <div className="h-96"></div>
            </div>
          </div>

        </div>
      </div>

    </div >







  )
}



export default App
