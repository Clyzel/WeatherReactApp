const FiveDayForecast = ({forecast}) => {

    return(
        <div>
        
            <h1>5 Day Weather Forecast for Dallas, TX</h1>
            <h2>{forecast.dt_txt}</h2>
            {forecast.weather.map((w) => {
                return <img src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} />
            })}
            <h2>Current Temp: {forecast.main.temp}</h2>
            <h2>Temp Low: {forecast.main.temp_min}</h2>
            <h2>Temp High: {forecast.main.temp_max}</h2>
            
            <h2></h2>
            <h2>Humidity: {forecast.main.humidity}</h2>
        
        </div>
    )
}

export default FiveDayForecast;