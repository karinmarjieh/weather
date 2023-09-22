import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleWeather from "./SingleWeather";

export default function Dashboard() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const apiKey = "4f4ea78702dee8a4d37270ad751c453c";
  const imageUrl = `https://www.countryflagicons.com/FLAT/64/${countryCode}.png`;

  const searchLocation = () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    // https://api.openweathermap.org/data/2.5/weather?q="london"&units=imperial&appid=4f4ea78702dee8a4d37270ad751c453c;
    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
        setCountryCode(weatherData?.sys?.country);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  useEffect(() => {
    searchLocation();
  }, [city, apiKey]);

  const fahrenheitToCelsius = (fahrenheit) => {
    const celsius = (((fahrenheit - 32) * 5) / 9).toFixed(2);
    return celsius;
  };

  return (
    <div className="dashboard-container">
      <div className="top">
        <div className="search">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter Location"
          />
          {/* </div>
        <div className="location">{city}</div>
        {weatherData.main ? (
          <div className="location">
            <img src={imageUrl} />
          </div>
        ) : null}
        <div className="temp">
          {weatherData.main ? (
            <h1>{fahrenheitToCelsius(weatherData?.main?.temp)}°C</h1>
          ) : null}
        </div>
        <div className="description">
          {weatherData.weather ? <p>{weatherData.weather[0].main}</p> : null}
        </div> */}
        </div>
        {/* <div className="bottom">
        <div className="feels">
          {weatherData.main ? (
            <p className="bold">
              {fahrenheitToCelsius(weatherData.main.feels_like)}°C
            </p>
          ) : null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          {weatherData.main ? (
            <p className="bold">{weatherData.main.humidity}%</p>
          ) : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
          {weatherData.wind ? (
            <p className="bold">{weatherData.wind.speed.toFixed()} MPH</p>
          ) : null}
          <p> Wind Speed</p>
        </div>
      </div> */}
        {weatherData.main ? (
          <SingleWeather
            city={city}
            imageUrl={imageUrl}
            weatherInCelzios={fahrenheitToCelsius(weatherData?.main?.temp)}
            description={weatherData.weather[0].main}
            feelsLike={fahrenheitToCelsius(weatherData.main.feels_like)}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed.toFixed()}
          />
        ) : null}
      </div>
    </div>
  );
}
