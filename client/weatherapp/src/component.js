const FiveDayForecast = ({forecast}) => {

    return(
        <div>
        
            <h1>5 Day Weather Forecast for Dallas, TX</h1>
            {/* the date within the api json data */}
            <h2>{forecast.dt_txt}</h2>

            {/* Finding the weather icon within the api json data */}
            {forecast.weather.map((w) => { 
                return <img src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} alt= " "/>
            })}
            {/* Accessing the tempurture, low and hi's and humidity within the api json data */}
            <h2>Current Temp: {forecast.main.temp}</h2>
            <h2>Temp Low: {forecast.main.temp_min}</h2>
            <h2>Temp High: {forecast.main.temp_max}</h2>
            <h2>Humidity: {forecast.main.humidity}</h2>
        
        </div>
    )
}

export default FiveDayForecast;