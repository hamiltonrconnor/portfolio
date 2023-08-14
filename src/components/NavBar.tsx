
import Dropdown from "./Dropdown"
import { Category } from "../assets/data";
import DarkModeButton from "./DarkModeButton";


type Props  = {
  updateFilter :Function
}

const NavBar = ({updateFilter }:Props) => {
  
 

 
  
  const updateChildFilter = (filters:Array<Category>) => {
    updateFilter(filters);
  };


  return (
    
<nav className="flex sm:flex-col items-start gap-5">
    
    <Dropdown updateFilter={updateChildFilter}/>
    <DarkModeButton />
  

</nav>

  )
}

export default NavBar