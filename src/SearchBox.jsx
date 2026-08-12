import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react'
import { red } from '@mui/material/colors';


export default function SearchBox({updateInfo}) {
    const [city,setCity]=useState("");
    const [error,setError]=useState(false);

    let API_URL ="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY ="4b32c4c12a9cc836547d0d0872f08a1e";

    let getweatherinfo = async () =>{ 
      try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data =await response.json();
            let result ={
                city:city,
                temperature:data.main.temp,
                temperature_min:data.main.temp_min,
                temperature_max:data.main.temp_max,
                humidity:data.main.humidity,
                pressure:data.main.pressure,
                weather:data.weather[0].main,
                feelslike:data.main.feels_like,
            }
            console.log(result);
            return result;
        }
        catch
        {
            throw error;
        }
    }


    let handleChange = (e) => {
        setCity(e.target.value);
    }

    let onsubmit =async (e)=>{
        try{
            e.preventDefault();
            console.log(city);
            let newInfo= await getweatherinfo();
            setCity("");
            updateInfo(newInfo);
        }
        catch
        {
            setError(true);
        }
    }


    return (
        <div className="SearchBox">
            <h2>Search for the city</h2>
            <form onSubmit={onsubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br/><br/>
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}
