import { useState } from 'react';
import Data from '../countries.json';
import {Link} from 'react-router-dom';
import {v4 as uuidv4} from "uuid";

const CountriesList = () => {

  const [list, setList] = useState(Data);

	return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {list.map((item) => {
			return <Link to={`/details/${item.alpha3Code}`} key={uuidv4()}  > {item.name.common.toString()} </Link>				
      })}
    </div>
  );
};

export default CountriesList;
