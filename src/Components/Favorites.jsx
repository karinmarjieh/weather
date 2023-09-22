import React from 'react'
import SingleWeather from './SingleWeather'

export default function Favorites() {
  const city1="Poland";
  const city2="London";
  const imageUrl1="https://www.countryflagicons.com/FLAT/64/PL.png"
  const imageUrl2="https://www.countryflagicons.com/FLAT/64/GB.png"
  return (
    <div>
    <h1>TODO : My Favorite Cities </h1>
    <SingleWeather
            city={city1}
            imageUrl={imageUrl1}
            weatherInCelzios={25}
            description={"sunny"}
            feelsLike={23}
            humidity={"nice"}
            windSpeed={200}
          />
    <SingleWeather
            city={city2}
            imageUrl={imageUrl2}
            weatherInCelzios={25}
            description={"sunny"}
            feelsLike={23}
            humidity={"nice"}
            windSpeed={200}
          />
    </div>
  )
}
