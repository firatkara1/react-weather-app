import { createContext, useEffect, useState } from "react";
import CitiesList from "../cities/CitiesList.json";
import { usePosition } from "use-position";
import getWeatherData from "../api/ApiCall";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentCity, setCurrentCity] = useState(
    CitiesList.Cities.find((city) => city.id === 34)
  );

  const [cityName, setCityName] = useState(currentCity.name);
  const { latitude, longitude } = usePosition();

  const [weather, setWeather] = useState();

  useEffect(() => {
    const weatherData = async () => {
      const cityWeather = await getWeatherData(
        currentCity.latitude,
        currentCity.longitude
      );
      setWeather(cityWeather.daily);
      setCityName(currentCity.name);
      document.querySelector(".weather").classList.remove("loading");
    };
    weatherData();
    console.log(process.env);
  }, [currentCity]);

  const values = {
    CitiesList,
    currentCity,
    setCurrentCity,
    weather,
    setWeather,
    latitude,
    longitude,
    cityName,
    setCityName,
  };

  return (
    <div className="wrapper">
      <WeatherContext.Provider value={values}>
        {children}
      </WeatherContext.Provider>
    </div>
  );
};

export default WeatherContext;
