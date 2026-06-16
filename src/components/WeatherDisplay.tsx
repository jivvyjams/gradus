import { getWeatherInfo } from "../utils/weatherCodes";

interface WeatherDisplayProps {
  weather: {
    name: string;
    country: string;
    current: {
      temperature_2m: number;
      apparent_temperature: number;
      relative_humidity_2m: number;
      weather_code: number;
      wind_speed_10m: number;
    };
  };
}

export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
  const { name, country, current } = weather;
  const info = getWeatherInfo(current.weather_code);

  return (
    <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-center gap-2 rounded-3xl border-4 border-jasmine-dark bg-jasmine-light p-8 text-molasses inset-shadow-sm inset-shadow-jasmine-dark drop-shadow-xl/40 drop-shadow-jasmine-dark dark:bg-jasmine-dark dark:text-tahini">
      <h3 className="text-3xl font-bold">
        {name}
        {country ? `, ${country}` : ""}
      </h3>

      <i className={`bi ${info.icon} text-7xl text-chicory-dark`}></i>
      <p className="text-2xl font-medium">{info.label}</p>

      <p className="text-6xl font-black">
        {Math.round(current.temperature_2m)}°C
      </p>
      <p className="text-lg">
        Feels like {Math.round(current.apparent_temperature)}°C
      </p>

      <div className="mt-2 flex gap-6 text-lg">
        <span>
          <i className="bi bi-wind pr-2"></i>
          {Math.round(current.wind_speed_10m)} km/h
        </span>
        <span>
          <i className="bi bi-droplet-half pr-2"></i>
          {current.relative_humidity_2m}%
        </span>
      </div>
    </div>
  );
}
