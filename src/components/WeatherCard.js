//import humidityImg from "../assets/humidity.png";

const WeatherCard = (props) => {
  const { weather } = props;

  const timeStamp = weather.dt;

  var options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const day = new Date(timeStamp * 1000);
  const date = day.toLocaleDateString("en-US", options);

  if (!weather) {
    return <p>Loading..</p>;
  }

  const sunriseObj = new Date(weather.sunrise * 1000);
  const sunriseHour = sunriseObj.getHours().toString().padStart(2, 0);
  const sunriseMin = sunriseObj.getMinutes().toString().padStart(2, 0);

  const sunsetObj = new Date(weather.sunset * 1000); //weather.sunset;
  const sunsetHour = sunsetObj.getHours().toString().padStart(2, 0);
  const sunsetMin = sunsetObj.getMinutes().toString().padStart(2, 0);

  return (
    <div className="weather">
      <span className="date">{date}</span>

      <h1 className="temp">
        <span>{weather.temp.max}°</span>
        <span className="min">{weather.temp.min}°</span>
      </h1>

      <div className="desc">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="icons"
        />
        <div className="description">{weather.weather[0].description}</div>
      </div>

      <div className="weather-item">
        <div>Humidity</div>
        <div>{weather.humidity}%</div>
      </div>
      <div className="weather-item">
        <div>Wind</div>
        &nbsp;&nbsp;
        <div>{weather.wind_speed} km/h</div>
      </div>

      <div className="weather-item">
        <div>Sunrise</div>
        <div>
          {sunriseHour}:{sunriseMin}
        </div>
      </div>
      <div className="weather-item">
        <div>Sunset</div>
        <div>
          {sunsetHour}:{sunsetMin}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
