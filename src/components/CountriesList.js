import {useState} from "react";
import Data from "./countries.json";


const CountriesList = () =>{
    const [list, setList] = useState({Data});
    return(
        <div>
           {list.map(country => {
                return console.log(country);
           })}
        </div>
    )
}

export default CountriesList;