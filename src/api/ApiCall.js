import axios from "axios";
const getWeatherData = async (lat, lon) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`
    );
    return data;
  } catch {
    alert("Lutfen Sayfayi Yenileyin!");
  }
};

export default getWeatherData;
