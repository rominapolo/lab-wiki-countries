import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import countries from './countries.json'
import CountryDetails from './Components/CountryDetails';
import { Routes, Route } from "react-router-dom";  


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className='container'>
      <div className='row'>
      <CountriesList countries={countries} />
      </div>
      <Routes>
          
        <Route 
          path="/:countryId" 
          element={ <CountryDetails countries={countries} /> } 
        />

      </Routes>

      </div>
      
 
    </div>
  );
}

export default App;
