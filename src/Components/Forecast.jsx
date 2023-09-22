import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Forecast() {
  const [forecastData, setForecastData] = useState({});
  const [city, setCity] = useState("");
  const [displayTable, setDisplayTable] = useState(false);

  const apiKey = "4f4ea78702dee8a4d37270ad751c453c";
  const ths = ["Date & Time", "Temperature", "Weather"];
  const fetchForecastData = async () => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=Metric&appid=${apiKey}`;
      const response = await axios.get(apiUrl);
      setForecastData(response.data);
    } catch (error) {
      console.error("could'nt fetch data ", error);
    }
  };
  useEffect(() => {
    fetchForecastData();
  }, [city]);

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
          <button type="submit" onClick={() => setDisplayTable(!displayTable)}>
            Search
          </button>
        </div>
        {forecastData && displayTable && (
          <div>
            <h1>{city}</h1>
            <table className="styled-table">
              <thead>
                {ths.map((th, index) => (
                  <th key={index}>{th}</th>
                ))}
              </thead>
              <tbody>
                {forecastData.list.map((data, index) => (
                  <tr key={index}>
                    <td>{data.dt_txt}</td>
                    <td>{data.main.temp}°C</td>
                    <td>{data.weather[0].description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
