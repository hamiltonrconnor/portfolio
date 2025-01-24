

type Props = {
    job_title: string,
    company: string,
    dates: string,

    skills: string[],
    children?: React.ReactNode,

}


const Block = (props: Props) => {
    return (
        <div className="px-8 py-2 font-quicksand flex">
            <div>
                <div className="flex flex-row  flex-wrap  gap-x-2 pr-8">
                    <h1 className="font-bold">{props.job_title + ","}</h1>
                    <h1 className="grow font-bold"> {props.company}  </h1>
                    <h1 className="font-bold self-end ">{props.dates} </h1>
                </div>

                {props.children}

                <div className="flex flex-row  flex-wrap  gap-x-2 pr-8 py-2">
                    {props.skills.map((item) => (<div className="font-quicksand bg-white px-2 border-2 border-gray-900 rounded ">{item}</div>))}


                </div>
            </div>



        </div>





    )
}

export default Block