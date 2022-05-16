import React, { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import getWeatherData from "../api/ApiCall";

function CityDropdown() {
  //const data = useContext(WeatherContext);

  const { CitiesList } = useContext(WeatherContext);
  const { setCurrentCity } = useContext(WeatherContext);

  const { latitude } = useContext(WeatherContext);
  const { longitude } = useContext(WeatherContext);
  const { setWeather } = useContext(WeatherContext);
  const { setCityName } = useContext(WeatherContext);

  const weatherData = async () => {
    const cityWeather = await getWeatherData(latitude, longitude);
    setWeather(cityWeather.daily);
    setCityName("your location");
  };

  const handleChange = (e) => {
    e.preventDefault();

    const selectedCityId = e.target.value;
    const selectedCity = CitiesList.Cities.find(
      (city) => city.id === Number(selectedCityId)
    );
    setCurrentCity(selectedCity);
  };
  return (
    <div className="search">
      <select className="select" onChange={handleChange}>
        <option value="none" hidden>
          Choose city
        </option>
        {CitiesList.Cities.map((res) => (
          <option key={res.id} value={res.id}>
            {res.name}
          </option>
        ))}
      </select>
      <button className="btn" onClick={weatherData}>
        Find your location <i className="fa-solid fa-location-dot"></i>
      </button>
    </div>
  );
}

export default CityDropdown;
