
import { useState } from "react";

type Props = {
    left_side: boolean,
    title: string,
    sub_tile: string,
    skills: string[],
    bg_color: string,
    children?: React.ReactNode,

}


const ProjectBlock = (props: Props) => {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(!showResults)
    return (


        <div className={(showResults ? "w-full " : "w-64 ") + (props.left_side ? "flex-row " : "flex-row-reverse ") + props.bg_color + " my-2 transition-all duration-300 ease-in-out  rounded-3xl flex  justfy-end justify-between h-64 transition-all"}>
            <div className={(props.left_side ? "border-r-3 " : "border-l-3 ") + "w-48 flex-none border-r-3  border-cream "}>
                <h1 className="px-4 pt-2 font-bold text-2xl ">{props.title}</h1>
                <h1 className="px-4  text-stone-600 text-lg ">{props.sub_tile}</h1>

                <div className=" px-4 flex flex-row  flex-wrap  gap-x-2 pr-8 py-2">
                    {props.skills.map((item) => (<div className="font-quicksand bg-white px-2 border-2 border-gray-900 rounded my-1 ">{item}</div>))}


                </div>
            </div>

            <div className={(showResults ? "transition-all delay-300 duration-100 opacity-100 w-0 px-4 py-2 " : "opacity-0 w-0 ") + "grow text-md   ease-in"} >
                {props.children}

            </div>

            <button className={(props.left_side ? "border-l-3 " : "border-r-3 ") + 'w-16 flex-none flex flex-row justify-center  items-center  border-cream '} onClick={onClick}>


                {!(showResults != props.left_side) ?
                    <svg className="w-3 h-3 stroke-current rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="#57534E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg> :

                    <svg className="w-3 h-3 stroke-current -rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
                        <path stroke="#57534E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 4 4 4 4-4" />
                    </svg>


                }

            </button>








        </div >












    )
}

export default ProjectBlock