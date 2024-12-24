import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

import { useState } from 'react';
import { red } from '@mui/material/colors';
import process from 'process';


export default function SearchBox({updateInfo}){
    const API_URL = `https://api.openweathermap.org/data/2.5/weather`
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;



    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let getWeatherInfo=async ()=>{
        try {
            let l = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            let resapi= await fetch(l);
            let jsonRes = await resapi.json();
            console.log(jsonRes);
            let res={
                city: jsonRes.name,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description,
            }
            console.log(res);
            return res;
        } catch (error) {
            throw error;
        }
    }
    let handleSubmit = async (event)=>{
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info);
        } catch (error) {
            setError(true);
        }
    }
    

    return (
        <div className='SearchBox'>
          <form onSubmit={handleSubmit}>   
            <h2>Search for the weather</h2>
            <TextField onChange={handleChange} id="city" label="Search City" variant="outlined" required value={city}/>
            &nbsp;
            <IconButton aria-label="search" size="large" onClick={handleSubmit}>
              <SearchIcon fontSize="inherit" />
            </IconButton>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
          </form>
        </div>
      );
      
}

