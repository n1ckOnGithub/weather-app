import React, { useState } from 'react'
import WeatherInfo from './WeatherInfo';

const Weatherdetails = () => {

    const [cityName, setcityName] = useState("Nairobi");
    const [weatherObj, setweatherobj] = useState();

        const getWeather = async () => {
          try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=eb7034c20b26d1b0c8f151be255ddf73`;
            let resp = await fetch(url);
            let data = await resp.json();

            // console.log(data);

            let weather = data.weather[0].description;
            let name = data.name;
            let temperature = Math.round(data.main.temp);
            let country = data.sys.country;
            let humidity = data.main.humidity;
            let windSpeed = Math.round(data.wind.speed);
            let iconType = data.weather[0].main;

            let newWeatherObj = {
              weather,
              name,
              temperature,
              country,
              humidity,
              iconType,
              windSpeed,
            };
            setweatherobj(newWeatherObj);
          } catch (error) {
            // console.log(error);
            alert("could not get " + cityName + " weather info")
          }
        }
        
  return (
    <>
      <div className="wrapper">
        <div className="searchWrapper">
          <input
            type="text"
            value={cityName}
            placeholder="Enter city"
            onChange={(e) => setcityName(e.target.value)}
            spellCheck="false"
          />
          <button onClick={getWeather}>
            <span class="material-symbols-rounded">search</span>
          </button>
        </div>
        <WeatherInfo {...weatherObj} />
      </div>
    </>
  );
}

export default Weatherdetails