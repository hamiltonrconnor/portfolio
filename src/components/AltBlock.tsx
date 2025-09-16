
import { useState } from "react";

type Props = {
    job_title: string,
    company: string,
    dates: string,

    skills: string[],
    children?: React.ReactNode,

}


const AltBlock = (props: Props) => {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(!showResults)
    return (
        <div className="px-8 py-2 font-quicksand flex text-lg ">
            <div>
                <div className="flex flex-row  flex-wrap  gap-x-2 pr-8 ">

                    <h1 className="font-bold">{props.job_title + " - "}</h1>
                    <h1 className="font-bold"> {props.company}  </h1>

                </div>
                <div className="relative flex flex-row gap-x-2 items-center py-2"   >
                    <h1 className="font-bold self-end text-stone-400 shrink ">{props.dates} </h1>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="flex-none text-stone-600 border-2 border-stone-300 hover:bg-stone-200    rounded-lg text-sm px-1 py-1 text-center inline-flex items-center " type="button" onClick={onClick}>
                        <p className="pr-1">More Details</p>
                        {showResults ?

                            <svg className="w-2.5 h-2.5 -scale-100 stroke-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
                                <path stroke="#57534E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 4 4 4 4-4" />
                            </svg> :
                            <svg className="w-2.5 h-2.5 stroke-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="#57534E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>

                        }
                    </button>

                </div>


                {showResults ? <p className="">{props.children}</p> : null}



                <div className="flex flex-row  flex-wrap  gap-x-2 pr-8 py-2">
                    {props.skills.map((item, index) => (<div key={index} className="font-quicksand bg-white px-2 border-2 border-gray-900 rounded my-1 " > {item}</div>))}


                </div>
            </div >



        </div >





    )
}

export default AltBlock