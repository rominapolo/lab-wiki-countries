import '../App.css'
import { Link } from "react-router-dom";  

function CountriesList({countries}) {
  return (
    <div class="container">
    <div class="row">
    <div className="countries">
        {countries.map((country)=>{
            return<div key={country.id}>
                <Link to={`/details/${country.id}`}>
                <h2>{country.name}</h2>
                </Link>
                <hr/>
                </div>
        })}
    </div>
    </div>
    </div>
    
 
          );
}

export default CountriesList;
