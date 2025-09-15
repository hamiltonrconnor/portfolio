

import { motion } from "motion/react"
import { Collapse } from 'flowbite';
import type { CollapseOptions, CollapseInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

type Props = {

    aboutSection: React.MutableRefObject<HTMLElement | null>
    projectSection: React.MutableRefObject<HTMLElement | null>
    experinceSection: React.MutableRefObject<HTMLElement | null>
}


const TopBar = ({ aboutSection, projectSection, experinceSection }: Props) => {

    const buttionMotion = {
        hover: {

            scale: 1.1,
            transition: { duration: 0.5 },
        }
    }
    const h2Motion = {
        rest: {
            color: ""
        },
        hover: {
            color: "inherit",



        }
    }



    // set the target element that will be collapsed or expanded (eg. navbar menu)
    const $targetEl: HTMLElement = document.getElementById('targetEl');

    // optionally set a trigger element (eg. a button, hamburger icon)
    const $triggerEl: HTMLElement = document.getElementById('triggerEl');

    // optional options with default values and callback functions
    const options: CollapseOptions = {
        onCollapse: () => {
            console.log('element has been collapsed');
        },
        onExpand: () => {
            console.log('element has been expanded');
        },
        onToggle: () => {
            console.log('element has been toggled');
        },
    };

    // instance options object
    const instanceOptions: InstanceOptions = {
        id: 'targetEl',
        override: true
    };

    /*
     * $targetEl: required
     * $triggerEl: optional
     * options: optional
     * instanceOptions: optional
     */
    const collapse: CollapseInterface = new Collapse(
        $targetEl,
        $triggerEl,
        options,
        instanceOptions
    );

    // show the target element
    collapse.expand();













    return (
        <div>


            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <button id="triggerEl" data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div id="targetEl" className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <nav className="flex flex-row justify-end gap-5 px-10 py-2 m-2 flex-wrap">
                <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full" id="navbar-hamburger">

                    <motion.div variants={buttionMotion} onClick={() => {
                        aboutSection.current?.scrollIntoView({ behavior: 'smooth' });
                    }
                    } className="block">
                        <div className="text-stone-400 dark:bg-slate-800">


                            <motion.div variants={h2Motion} whileHover="hover" className="  py-2 px-4 text-3xl font-extrabold font-vergil text-stone-500 ">About Me</motion.div >

                        </div>
                    </motion.div>


                    <motion.div variants={buttionMotion} onClick={() => {
                        window.scrollTo({ top: experinceSection.current?.getBoundingClientRect().top, behavior: "smooth" })
                    }} className="">
                        <div className="text-stone-400 dark:bg-slate-800">





                            <motion.div variants={h2Motion} whileHover="hover" className="m-1 py-2 px-4 text-3xl font-extrabold font-vergil  text-stone-600   ">Experience</motion.div>

                        </div>
                    </motion.div>


                    <motion.div variants={buttionMotion} onClick={() => {
                        window.scrollTo({ top: projectSection.current?.getBoundingClientRect().top, behavior: "smooth" })
                    }} className="">
                        <div className="text-stone-400 dark:bg-slate-800">
                            <motion.div variants={h2Motion} whileHover="hover" className="m-1 py-2 px-4 text-3xl font-extrabold font-vergil text-stone-600 dark:bg-slate-800">

                                Projects

                            </motion.div>
                        </div>
                    </motion.div>
                </div>










            </nav >

        </div >


    )
}

export default TopBar