import { useState } from "react";
import Card from "./Card"
import data, { Category } from "../assets/data"



type Props = {
  filters: Category[]
}

const CardGrid = ({ filters }: Props) => {
  const [jsonData] = useState(data);


  const ColorList = ["bg-pastel-red", "bg-pastel-green", "bg-pastel-yellow", "bg-pastel-orange", "bg-pastel-blue"]

  const PickColor = (key: number) => {

    return ColorList[key];
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">


      {jsonData.filter((newVal) => {
        return filters.some(r => newVal.category?.includes(r));
      }).map((item) => (<Card bg_color={PickColor(item.id)} card={{
        "id": item.id,
        "title": item.title,
        "body": item.body,
        "imgUrl": item.imgUrl,
        "readMoreLink": item.readMoreLink,
        "category": item.category

      }} />))
      }


    </div>
  )
};

export default CardGrid