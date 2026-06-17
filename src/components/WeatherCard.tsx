import { getWeatherInfo } from "../utils/weatherCodes";

interface CurrentWeather {
  time: string;
  temperature_2m: number;
  apparent_temperature: number;
  precipitation: number;
  wind_speed_10m: number;
  weather_code: number;
}

interface WeatherCardProps {
  data: CurrentWeather;
  name: string | undefined;
}

export default function WeatherCard({ data, name }: WeatherCardProps) {
  const info = getWeatherInfo(data.weather_code);

  return (
    <>
      <h2 className="text-4xl font-bold md:text-6xl">Weather</h2>
      <div className="mx-auto mt-8 flex w-full max-w-4xl flex-col items-center gap-8 rounded-3xl border-4 border-jasmine-dark bg-jasmine-light p-8 text-molasses inset-shadow-sm inset-shadow-jasmine-dark drop-shadow-xl/40 drop-shadow-jasmine-dark md:flex-row md:justify-center dark:border-jasmine-light dark:bg-jasmine-dark dark:text-tahini dark:inset-shadow-jasmine-light">
        <div className="flex justify-center md:flex-1">
          <i
            className={`bi ${info.icon} text-9xl text-chicory md:text-[256px] dark:text-chicory-light`}
          ></i>
        </div>

        <div className="flex flex-col items-center md:flex-1 md:items-start">
          <h2 className="pb-8 text-4xl font-bold">{name}</h2>
          <p className="text-6xl font-black">{data.temperature_2m}°C</p>
          <p className="text-2xl font-medium">{info.label}</p>
          <p className="text-lg">Feels like {data.apparent_temperature}°C</p>

          <div className="mt-4 flex gap-6 text-lg">
            <span>
              <i className="bi bi-droplet-half pr-2"></i>
              {data.precipitation} mm
            </span>
            <span>
              <i className="bi bi-wind pr-2"></i>
              {data.wind_speed_10m} km/h
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
