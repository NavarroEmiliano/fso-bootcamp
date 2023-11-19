/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Weather = ({ country }) => {
  const [weather, setWeather] = useState({
    temperature: "",
    wind: "",
    humidity: "",
  });
  const hook = () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    const countryName = country.name.common

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        const weatherObject = {
          temperature: response.data.main.temp,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
        };
        setWeather(weatherObject);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(hook, []);


  return (
    <div>
      <h3>Weather in {country.name.common}</h3>
      <p>Temperature : {weather.temperature} ºC</p>
      <p>Wind : {weather.wind} meter/sec</p>
      <p>Humidity : {weather.humidity} %</p>
    </div>
  );
};

export default Weather;
