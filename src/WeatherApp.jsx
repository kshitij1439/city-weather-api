import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Pune",
        feelsLike: 22.88,
        humidity:45,
        temp:23.32,
        tempMax:23.32,
        tempMin:23.32,
        weather:"clear sky"
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox w={weatherInfo}/>
        </>
    )
}