import { CardType } from "../assets/data"




const Card = ({title , body ,imgUrl,readMoreLink}:Omit<CardType, "id">) => {
  return (
   
   <div className=" max-w-sm h-fit break-inside flex  flex-1 flex-col justify-between   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-1 ">
    <div>
        <img className="rounded-t-lg" src={imgUrl} alt="" />

        <div className="px-5 pt-5">
            
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            
            <p className="mb-3  font-normal text-gray-700 dark:text-gray-400  ">{body}</p>

            
            
            
        </div>
    </div>
    {readMoreLink !=null && <a href="#" className="px-5 pb-5 text-blue-600 hover:underline  ">Read more</a>}
    
    
     
     </div> 
  
     
     

  )
}

export default Card