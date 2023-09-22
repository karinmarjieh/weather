import React from "react";

export default function SingleWeather({
  city,
  imageUrl,
  weatherInCelzios,
  description,
  feelsLike,
  humidity,
  windSpeed,
}) {
  return (
    <>
      <div className="top">
            <div className="search"></div>
            <div className="location">{city}</div>
            <div className="location">
                <img src={imageUrl} />
            </div>
            <div className="temp">
                <h1>{weatherInCelzios}°C</h1>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
      </div>
      <div className="bottom">
            <div className="feels">
                <p className="bold">{feelsLike}°C</p>
                <p>Feels Like</p>
            </div>
            <div className="humidity">
                 <p className="bold">{humidity}%</p>
                <p>Humidity</p>
            </div>
            <div className="wind">
                <p className="bold">{windSpeed} MPH</p>
                <p> Wind Speed</p>
            </div>
      </div>
    </>
  );
}
