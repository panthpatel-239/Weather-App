import { useState } from 'react';
import SearchBox from './SearchBox'
import InfoBox from './info';

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city : "Delhi",
        humidity: 48,
        pressure: 1002,
        feelslike : 24.84,
        temperature: 34.83,
        temperature_max: 34.83,
        temperature_min : 34.83,
        weather: "Clouds"
    })


    let updateInfo =(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather app by  panth</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}