import React, { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import WeatherCard from "./WeatherCard";

function WeatherData() {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="card">
      {weather?.map((weatherData, index) => (
        <WeatherCard key={index} weather={weatherData} />
      ))}
    </div>
  );
}

export default WeatherData;
