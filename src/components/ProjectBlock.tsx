


type Props = {
    left_side: boolean,
    title: string,
    sub_tile: string,
    skills: string[],
    bg_color: string,
    bg_color_plus: string,
    children?: React.ReactNode,
    mask: string

}


const ProjectBlock = (props: Props) => {

    return (

        <div className={props.bg_color + " w-64 lg:w-full h-64 rounded-3xl overflow-hidden"} >
            < div className={" relative"}>

                <div className="absolute  inset-0 blur-md opacity-20  ">
                    <div className={props.mask + "  rounded-3xl "}>
                        <div className="  ">
                            <div className={"w-64 h-64 lg:w-full " + props.bg_color_plus}></div>


                        </div>

                    </div>
                </div>
                <div className="absolute inset-0  w-64 lg:w-full h-64 " >
                    <div className={(props.left_side ? "flex-row " : "flex-row-reverse ") + "rounded-3xl " + " w-64 lg:w-full   flex justfy-end justify-between h-64  z-10"}>

                        <div className={(props.left_side ? "border-r-0 lg:border-r-3 " : "border-r-0 lg:border-l-3 ") + "w-64 flex-none  border-cream  "}>
                            <h1 className="px-4 pt-2 font-bold text-2xl ">{props.title}</h1>
                            <h1 className="px-4  text-stone-600 text-lg ">{props.sub_tile}</h1>

                            <div className=" px-4 flex flex-row  flex-wrap  gap-x-2 pr-8 py-2">
                                {props.skills.map((item, index) => (<div key={index} className="font-quicksand bg-white px-2 border-2 border-gray-900 rounded my-1 ">{item}</div>))}


                            </div>
                        </div>

                        <div className={(props.left_side ? " rounded rounded-r-2xl" : " rounded rounded-l-2xl") + "  grow text-md  fornt-semi-bold text-stone-600 ease-in hidden lg:block px-3  " + props.bg_color} >
                            {props.children}

                        </div>

                    </div >
                </div>


            </div >
        </div >












    )
}

export default ProjectBlock