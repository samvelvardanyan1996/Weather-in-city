import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import WeatherForTheNextDays from "./WeatherForTheNextDays";
import search from "./svg/search.svg";
import cloudyGusts from "../src/svg/wi-day-cloudy-gusts.svg";
import strongWind from "../src/svg/wi-strong-wind.svg";

const Content = () => {
  const [cityName, setCityName] = useState("");
  const [showWeather, setShowWeather] = useState(false);
  const [data, setData] = useState({});

  const getWeather = () => {
    if(cityName !== ""){
      setShowWeather(true);
      fetch("https://goweather.herokuapp.com/weather/" + cityName)
        .then(response => response.json())
        .then(result => setData(result))
        .catch(err => console.error(err));

        return () => {
        // clearEffect
      };
    }
  }

  const handleInputChange = (e) => {
    setCityName(e.target.value)
  }
  let temperature;
  let temperatureFeelsLike;
  let wind;
  if( data.temperature === undefined ){
    temperature = ""
    temperatureFeelsLike = ""
    wind = "";
  }
  else if( data.temperature !== undefined && (data.temperature[0] === "+" || data.temperature[0] === "-") ){
    temperature = data.temperature.slice(1, 3);
    temperatureFeelsLike = data.temperature.slice(1, 3) - 1;
    wind = data.wind;
  }
  else{
    temperature = data.temperature.slice(0, 2);
    temperatureFeelsLike = data.temperature.slice(0, 2) - 1;
    wind = data.wind;
  }


  console.log(data);
  return (
    <div className="content">
      <div className="container">
        <div className="search">
          <img className="searchLocationIcon" src={search} alt="Search location" />
          <input className="inputSearch" type="search" placeholder="Search for a location" onChange={handleInputChange} />
        </div>
        <Button className="getWeather" variant="outlined" onClick={getWeather}>
          Get Weather
        </Button>
        <div className={showWeather === true ? "weather" : "weather displayNone"}>
          <div className="locationAndDayOfWeek">
            <div className="location">
              <span>{cityName}</span>
            </div>
          </div>
          <div className="temperatureAndWeatherInGraphic">
            <div className="flexColumn temperatureInDegreesCelsius">
              <span className="inReality">{temperature}°</span>
              <span className="feelsLike">Feels like {temperatureFeelsLike}°</span>
            </div>
            <div className="theWeatherForTodayIsOnGraphic">
              <img src={cloudyGusts} alt="Weather day alt cloudy gusts" />
            </div>
          </div>
          <div className="windAndHumidity">
            <div className="wind">
              <div className="windIcon">
                <img src={strongWind} alt="Weather strong wind" />
              </div>
              <div>{wind} winds</div>
            </div>
          </div>
          <div className="weatherForTheNextDays">
            {data?.forecast !== undefined && <WeatherForTheNextDays items={data.forecast} /> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;