import { getWeatherInfo } from "../utils/weatherCodes";

interface WeatherCardProps {
  data: CurrentWeather;
  name: string | undefined;
}

export default function WeatherCard({ data, name }) {
  const info = getWeatherInfo(data.weather_code);

  return (
    <div>
      <h1>Weather</h1>
    </div>
  );
}
