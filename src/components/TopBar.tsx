



type Props = {

    aboutSection: React.MutableRefObject<HTMLElement | null>
    projectSection: React.MutableRefObject<HTMLElement | null>
    experinceSection: React.MutableRefObject<HTMLElement | null>
}


const TopBar = ({ aboutSection, projectSection, experinceSection }: Props) => {








    return (
        <div>

            <nav className="flex flex-row justify-end gap-5 px-10 py-2 m-2 flex-wrap">
                <div className="hover:-translate-y-1">
                    <div className="m-1 border-3 border-slate-900 bg-white topbar-border2 drop-shadow-hard-md   dark:bg-slate-800">
                        <button className=""
                            onClick={() => {
                                aboutSection.current?.scrollIntoView({ behavior: 'smooth' });
                            }
                            }>
                            <h2 className="  py-2 px-4 text-3xl font-extrabold font-vergil text-stone-600 hover:text-red-300 dark:text-white  ">About Me</h2>
                        </button>
                    </div>
                </div>
                <div className="hover:-translate-y-1">
                    <div className="m-1 border-3 border-slate-900 bg-white topbar-border1 drop-shadow-hard-md dark:bg-slate-800">
                        <button

                            onClick={() => {
                                console.log(experinceSection.current?.scrollTop)
                                window.scrollTo({ top: experinceSection.current?.getBoundingClientRect().top, behavior: "smooth" })
                            }


                            }

                        >
                            <h2 className="py-2 px-4 text-3xl font-extrabold font-vergil  text-stone-600 hover:text-sky-300 dark:text-white  ">Experience</h2>
                        </button>
                    </div>
                </div>
                <div className="hover:-translate-y-1">
                    <div className="m-1 border-3 border-slate-900 bg-white topbar-border3 drop-shadow-hard-md dark:bg-slate-800">
                        <button

                            onClick={() => {
                                console.log(projectSection.current?.scrollTop)
                                window.scrollTo({ top: projectSection.current?.getBoundingClientRect().top, behavior: "smooth" })
                            }


                            }

                        >
                            <h2 className="py-2 px-4 text-3xl font-extrabold font-vergil  text-stone-600 hover:text-sky-300 dark:text-white  ">Projects</h2>
                        </button>
                    </div>
                </div>









            </nav >

        </div >


    )
}

export default TopBar