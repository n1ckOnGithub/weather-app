import React from 'react'

const WeatherInfo = ({weather,name,temperature,country,humidity,windSpeed,iconType}) => {

     
       if (iconType) {
         switch (iconType) {
           case "Clouds":
             iconType = "cloud";
             break;
           case "Haze":
             iconType = "mist";
             break;
           case "Clear":
             iconType = "clear_day";
             break;
           case "Mist":
             iconType = "mist";
             break;
           case "Rain":
             iconType = "rainy";
             break;
           case "Snow":
             iconType = "ac_unit";
             break;

           default:
             iconType = "sunny";
             break;
         }
       }

  return (
    weather &&
    <>
      <div className="weatherInfo">
        <h1 className="location">
          {name}, {country}.
        </h1>
        <h3 className='description'>{weather}</h3>
        <span className="temperature">{temperature}°C</span>
        <span id="icon" className="material-symbols-rounded">
          {iconType}
        </span>
        <h4 className='humidity'>Humidity:{humidity}%</h4>
        <h4 className='windSpeed'>Wind speed: {windSpeed} km/h</h4>

      </div>
    </>
  );
}

export default WeatherInfo