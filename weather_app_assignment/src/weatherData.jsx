import "./weatherApp.css"
const WeatherData = ({weather}) => {
    return (
        <>
            <section className="weather-data-container">
                <div>
                    Weather Details of City: {weather.cityName}
                </div>
                <div>
                    Current Temperature:  {(parseInt(weather.currentTemp) - 272.15).toFixed(2)} °C
                </div>
                <div>
                    Temperature Range: {(parseInt(weather.tempMax) - 272.15).toFixed(2)} to {(parseInt(weather.tempMin) - 272.15).toFixed(2)} °C
                </div>
                <div>
                    Humidity: {weather.humidity ? weather.humidity : 55}
                </div>
                <div>
                    Sea Level: {weather.seaLevel ? weather.seaLevel : 87}
                </div>
                <div>
                    Ground Level: {weather.groundLevel ? weather.groundLevel : 59}
                </div>
            </section>
        </>
    )
}

export default WeatherData