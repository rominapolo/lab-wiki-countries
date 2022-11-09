import '../App.css'
import { useParams } from 'react-router-dom'

function CountryDetails({countries}) {
    const { countryID } = useParams();
    const country = countries.find((eachCountry)=>{
        return eachCountry == countryID;
    })

  return (
    <div>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
    </div>
  );
}
export default CountryDetails;