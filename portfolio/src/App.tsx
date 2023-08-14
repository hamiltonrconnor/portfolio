


import  { useContext, useState } from 'react';
import './App.css'
import CardGrid from './components/CardGrid'
import Title from './components/Title'
import NavBar from './components/NavBar';

import { Category } from './assets/data';

import { DarkModeContext } from './utilities/darkModeContext';
import { DarkModeContextType } from './@types/context';






function App() {
  const { darkMode } = useContext(DarkModeContext) as DarkModeContextType
  const  categories : Array<Category> = Object.values(Category);
  const [filters, setFilter] = useState<Array<Category>>(categories);
   const updateFilter = (filters:Array<Category>) => {
     setFilter(filters);
   };
  
 

  return (


    
    
      
    <div className={darkMode ?"dark" : "" }>
      
    <div className={`min-h-screen bg-gradient-to-tr from-slate-50 to-blue-100 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black`}> 
    <Title str = "Connor  Hamilton Portfolio" />
    
    
    

    
    
    

<div className="  relative sm:z-0 sm:flex   ">
<div className=" grid justify-items-center sm:pl-2 ">
<div>

  <NavBar updateFilter={updateFilter} />
</div>

  
  
</div>

  <div className='p-5  justify-center '>
  <CardGrid filters = {filters} />
    
    
    
     
  
</div>

</div>
</div>
</div>


    
    
    
  )
} 



export default App
