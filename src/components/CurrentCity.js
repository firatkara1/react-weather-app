import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";

function CurrentCity() {
  const { cityName } = useContext(WeatherContext);
  return (
    <div className="weather loading">
      <h2 className="city">Weather for {cityName}</h2>
    </div>
  );
}

export default CurrentCity;
