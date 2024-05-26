import { CardType } from "../assets/data"


type Props = {
  card: CardType,
  bg_color: string,

}


const Card = (props: Props) => {
  return (

    <div className={` max-w-sm h-fit break-inside flex flex-1 flex-col justify-between drop-shadow-hard border-4 border border-gray-900 rounded-xl  dark:bg-gray-800 dark:border-gray-700 hover:translate-y-1 " + ${props.bg_color}`}>
      <div>
        {(props.card.imgUrl != null && props.card.imgUrl != "") &&
          <div className={"mx-3 mt-3 "}>
            <img className={"rounded-xl border-4 border border-gray-900"} src={props.card.imgUrl} alt="" />
          </div>
        }
        <div className="px-5 pt-3">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.card.title}</h5>

          <p className="mb-3  font-normal text-gray-700 dark:text-gray-400  ">{props.card.body}</p>




        </div>
      </div>
      {props.card.readMoreLink != null && <a href="#" className="px-5 pb-5 text-blue-600 hover:underline  ">Read more</a>}



    </div>




  )
}

export default Card