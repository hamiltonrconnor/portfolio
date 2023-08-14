import {  useState } from "react";
import Card from "./Card"
import data, { Category } from "../assets/data"



type Props  = {
  filters : Category[]
}

const CardGrid = ({filters}:Props) => {
   const [jsonData] = useState(data);
   

   
   
 
   
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
   
    
    {jsonData.filter((newVal) => {
      return filters.some(r=> newVal.category?.includes(r));} ).map((item)=>(<Card key={item.id} title = {item.title} body= {item.body} imgUrl = {item.imgUrl} readMoreLink={item.readMoreLink}  />))
    }
    
    
    </div>
  )
};

export default CardGrid