import React from "react";
import "./App.css";
import CityDropdown from "./components/CityDropdown";
import CurrentCity from "./components/CurrentCity";
import WeatherData from "./components/WeatherData";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <div>
      <WeatherProvider>
        <CityDropdown />
        <CurrentCity />
        <WeatherData />
      </WeatherProvider>
    </div>
  );
}

export default App;
