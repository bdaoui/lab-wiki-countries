import { useParams } from "react-router-dom";


const CountryDetails = (Data)=>{
    let {id } = useParams();
    const {data} = Data;

    const country = data.filter(country => country.alpha3Code === id )
    console.log(country[0]);
    return(
        <div>
            <h1>{country[0].name.common}</h1>
            <h2>{country[0].region}</h2>
        </div>
    )
}

export default CountryDetails;