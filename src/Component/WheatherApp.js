import React from 'react'
import {useState, useEffect} from 'react'
import { FaStreetView  } from "react-icons/fa";


const API_KEY = 'e57af8a489280dc21d2e8fd004b0df2f';

export default function WheatherApp() {
    
    const [city, setCity]=useState(null);
    const [search, setSearch]=useState('');
    const onSubmit = (e) => {
        setSearch(e.target.value);
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        getCity();
      };
    
      const getCity = () => {
        if (search) {
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
              if (data.cod === 200) {
                setCity(data);
              } else {
                
                setCity(null);
              }
            })
            .catch((error) => console.error('Error fetching data:', error));
        }
      };
    
      useEffect(() => {
        getCity(); 
      }, []);
  return (
    <div className='wheather'>
        <h1>Wheather App</h1>

        <div className="box">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="input-field"
            placeholder="Enter the City"
            value={search}
            onChange={onSubmit} 
            FaSearch
          />
         </form>
         {city && city.cod === 200 && (
          <div className="search-bar">
            <h1>
              <FaStreetView />
            </h1>
            <h1>{city.name}</h1>
            <p>Temperature: {((city.main.temp) - 273.15).toFixed(0)}°C</p>
          
          </div>
        )}

        {city && city.cod !== 200 && (
          <div className="search-bar">
            <p>City not found. Please try again.</p>
          </div>
        )}
         </div>

         
       
       
    

    </div>
  )
}
