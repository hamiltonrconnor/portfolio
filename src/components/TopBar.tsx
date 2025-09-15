

import { motion } from "motion/react"

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












    return (
        <div>

            <nav className="flex flex-row justify-end gap-5 px-10 py-2 m-2 flex-wrap">
                <motion.button


                    whileTap={{ scale: 0.9 }}

                    className=""
                    onClick={() => {
                        aboutSection.current?.scrollIntoView({ behavior: 'smooth' });
                    }
                    }>
                    <motion.div variants={buttionMotion} className="">
                        <div className="text-stone-400 dark:bg-slate-800">


                            <motion.div variants={h2Motion} whileHover="hover" className="  py-2 px-4 text-3xl font-extrabold font-vergil text-stone-500 ">About Me</motion.div >

                        </div>
                    </motion.div>
                </motion.button>
                <motion.button

                    onClick={() => {
                        console.log(experinceSection.current?.scrollTop)
                        window.scrollTo({ top: experinceSection.current?.getBoundingClientRect().top, behavior: "smooth" })
                    }}>
                    <motion.div variants={buttionMotion} className="">
                        <div className="text-stone-400 dark:bg-slate-800">





                            <motion.div variants={h2Motion} whileHover="hover" className="m-1 py-2 px-4 text-3xl font-extrabold font-vergil  text-stone-600   ">Experience</motion.div>

                        </div>
                    </motion.div>
                </motion.button>
                <motion.button


                    onClick={() => {
                        console.log(projectSection.current?.scrollTop)
                        window.scrollTo({ top: projectSection.current?.getBoundingClientRect().top, behavior: "smooth" })
                    }


                    }

                >
                    <motion.div variants={buttionMotion} className="">
                        <a className="text-stone-400 dark:bg-slate-800">
                            <motion.div variants={h2Motion} whileHover="hover" className="m-1 py-2 px-4 text-3xl font-extrabold font-vergil text-stone-600 dark:bg-slate-800">

                                Projects

                            </motion.div>
                        </a>
                    </motion.div>
                </motion.button>









            </nav >

        </div >


    )
}

export default TopBar