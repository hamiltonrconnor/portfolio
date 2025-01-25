


type Props = {
    left_side: boolean,
    title: string,
    sub_tile: string,
    skills: string[],
    bg_color: string,
    children?: React.ReactNode,

}


const ProjectBlock = (props: Props) => {

    return (


        <div className={(props.left_side ? "flex-row " : "flex-row-reverse ") + props.bg_color + " w-64 lg:w-full my-2  rounded-3xl flex  justfy-end justify-between h-64 "}>
            <div className={(props.left_side ? "border-r-0 lg:border-r-3 " : "border-r-0 lg:border-l-3 ") + "w-64 flex-none border-r-3  border-cream "}>
                <h1 className="px-4 pt-2 font-bold text-2xl ">{props.title}</h1>
                <h1 className="px-4  text-stone-600 text-lg ">{props.sub_tile}</h1>

                <div className=" px-4 flex flex-row  flex-wrap  gap-x-2 pr-8 py-2">
                    {props.skills.map((item) => (<div className="font-quicksand bg-white px-2 border-2 border-gray-900 rounded my-1 ">{item}</div>))}


                </div>
            </div>

            <div className={"grow text-md   ease-in hidden lg:block py-2 px-3"} >
                {props.children}

            </div>









        </div >












    )
}

export default ProjectBlock