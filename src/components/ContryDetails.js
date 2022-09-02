import { useParams } from "react-router-dom";


const CountryDetails = ({Data})=>{
    let {id } = useParams();

    return(

        <div>
            {id}
        </div>
    )
}

export default CountryDetails;