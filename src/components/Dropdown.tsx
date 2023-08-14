import {  useState } from 'react'
import { Category } from '../assets/data.ts';


type Props  = {
  updateFilter :Function
}

const Dropdown = ({updateFilter}:Props) => {
    const [hidden, setHidden] = useState(false);
    const handleHidden = () => { 
    
        setHidden(!hidden); 
        
      }; 
    
    
    const  categories : Array<Category> = Object.values(Category);
    const [categoriesToggles]= useState(new Set<Category>(categories));
    
    const [checked, setChecked ]= useState(categories.map(()=>(true)));
    
    function handleCategories(category:Category,index:number ){
        
        if(categoriesToggles.has(category)){
            categoriesToggles.delete(category);
        }else{
            categoriesToggles.add(category);
        }
        
        updateFilter(Array.from(categoriesToggles)) 

        checked[index] = !checked[index]
        setChecked(checked)

       

    }
    
  
    return (
    <div>
    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"  className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 " type="button" onClick={handleHidden}>Filters <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg></button>

<div id="dropdown" className={hidden? "hidden" : "" + "z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      
      {categories.map((item,index) => (<li key = {index} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
      <label className="relative inline-flex items-center cursor-pointer">
  <input  checked={checked[index] } type="checkbox" value="" className="sr-only peer" onChange={() => handleCategories(item,index)}></input>
  <div className="w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{item} </span>
</label>
      </li>))
      
      }
      
      
    </ul>
</div>
</div>
  )
}

export default Dropdown