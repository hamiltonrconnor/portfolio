


import { useState } from "react";

type TopBarProps = {

    aboutSection: React.MutableRefObject<HTMLElement | null>
    projectSection: React.MutableRefObject<HTMLElement | null>
    experinceSection: React.MutableRefObject<HTMLElement | null>

}
type ElementsProps = { isHambergerToggled: Boolean }
type TopBarElementsProps = TopBarProps & ElementsProps







interface HambergerProps {
    onToggle: () => void;
}
const Hamburger = ({ onToggle }: HambergerProps) => {



    return (
        <div className="flex flex-row-reverse">
            <button onClick={onToggle} id="triggerEl" type="button" className="justify-end  p-2 w-10 h-10  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
        </div>
    )


}

const Elements = ({ aboutSection, projectSection, experinceSection, isHambergerToggled }: TopBarElementsProps) => {




    return (
        <div id="targetEl" className={(isHambergerToggled ? "" : "hidden w-full md:block md:w-auto ")} >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:justify-end md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <div onClick={() => {
                        aboutSection.current?.scrollIntoView({ behavior: 'smooth' });
                    }
                    } className="flex flex-row justify-end">



                        <div className="text-stone-600 hover:text-stone-400 py-2 px-4 text-3xl font-extrabold font-vergil  ">
                            About Me

                        </div>
                    </div>
                </li>
                <li>
                    <div onClick={() => {
                        window.scrollTo({ top: experinceSection.current?.getBoundingClientRect().top, behavior: "smooth" })
                    }} className="flex flex-row justify-end">
                        <div className="text-stone-600 hover:text-stone-400 py-2 px-4 text-3xl font-extrabold font-vergil  ">
                            Experience

                        </div>

                    </div>
                </li>
                <li>
                    <div onClick={() => {
                        window.scrollTo({ top: projectSection.current?.getBoundingClientRect().top, behavior: "smooth" })
                    }} className="flex flex-row justify-end">
                        <div className="text-stone-600 hover:text-stone-400 py-2 px-4 text-3xl font-extrabold font-vergil  ">
                            Projects

                        </div>

                    </div>
                </li>

            </ul >
        </div >)

}



const TopBar = ({ aboutSection, projectSection, experinceSection }: TopBarProps) => {



    const [isHambergerToggled, setHamberger] = useState(false);

    const handleHambergerToggle = () => {
        setHamberger(!isHambergerToggled);
    };



    return (
        <div>


            <nav className="px-4 py-2 m-2 flex flex-col ">

                <Hamburger onToggle={handleHambergerToggle} />
                <Elements aboutSection={aboutSection} projectSection={projectSection} experinceSection={experinceSection} isHambergerToggled={isHambergerToggled} />


            </nav >








        </div >


    )
}

export default TopBar