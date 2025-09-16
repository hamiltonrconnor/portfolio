import { motion } from "motion/react"
// import { useEffect, useState } from "react"

const TitleAnimation = () => {
    // const images = ["Hi-frame0.svg", "Hi-frame1.svg", "Hi-frame2.svg", "Hi-frame3.svg"]


    return (
        <motion.div>
            <div className="flex flex-row">
                <div className="relative  h-48px w-[55px] ">
                    <img className="absolute boiling-phase-1" src={"../public/docs/assets/images/Hi-frame0.svg"} />
                    <img className="absolute boiling-phase-2" src={"../public/docs/assets/images/Hi-frame1.svg"} />
                </div>
                <span className="pl-4 font-vergil h-16 text-5xl align-baseline font-bold">I'm Connor Hamilton!</span>

            </div>

            {/* <img src={"../public/docs/assets/images/" + images.map(images =>)}></img> */}



        </motion.div>





    )
}

export default TitleAnimation