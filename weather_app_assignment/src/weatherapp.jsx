import "./weatherApp.css"
import axios from 'axios'
import { useState } from 'react'
import WeatherData from './weatherData'

const WeatherApp = () => {
    const [city, setCity] = useState({ name: "" })
    const [cityArray, setCityArray] = useState([]);
    const [weather, setWeather] = useState({
        cityName: "", currentTemp: "", tempMax: "", tempMin: "",
        humidity: "", seaLevel: "", groundLevel: ""
    })
    const [defaultCity, setDefaultCity] = useState(false)
    const handleCityInput = (e) => {
        setCity({ name: e.target.value })
    }
    const fetchWeatherApi = async () => {
        cityArray.push(city.name)
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=bc866f71f1a12c10dbbf4114dbba069a`)
            .then((res) => {
                // console.log("Main Data", res.data.main)
                setDefaultCity(true)
                setWeather({
                    ...weather, cityName: res.data.name, currentTemp: res.data.main.temp, tempMax: res.data.main.temp_max,
                    tempMin: res.data.main.temp_min, humidity: res.data.main.humidity, seaLevel: res.data.main.sea_level, groundLevel: res.data.main.grnd_level
                })
                if (cityArray.length > 3) {
                    cityArray.pop()
                }
                cityArray.map((i) => {
                    console.log(i)
                })
            })
            .catch((err) => {
                // if(cityArray.length){
                //     cityArray.pop()
                // }
                console.log(err)
                setDefaultCity(false)
            })
    }
    // console.log(weather)
    return (
        <>
            <section id="WA-container">
                <h1>Weather App</h1>

                <div id="input-n-btn">
                    <div>
                        <input type="search" onChange={handleCityInput} placeholder="Enter City Name" />
                    </div>
                    <div>
                        <button id="searchBtn" onClick={fetchWeatherApi}>search</button>
                    </div>
                </div>
                {!city.name && cityArray.length ?
                <ul className="city-array-data">{
                cityArray.map((cityname, i) =>{
                    return(
                        <li key="i">{cityname}</li>
                    )
                })
                }</ul>  : null }
                {cityArray.length == 0  || !city.name ? null :
                <section id="main-data">
                   {!defaultCity ? <div id="invalid-city-err">Enter Valid City Name</div> : <WeatherData weather={weather}/>}
                </section> } 
            </section>
        </>
    )
}

export default WeatherApp