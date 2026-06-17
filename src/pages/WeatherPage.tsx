import { useState, useEffect } from "react";
import { useParams } from "react-router";
import WeatherCard from "../components/WeatherCard";

interface Forecast {
  current: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    precipitation: number;
    wind_speed_10m: number;
    weather_code: number;
  };
}

type FetchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: Forecast["current"] };

export default function WeatherPage() {
  const [state, setState] = useState<FetchState>({ status: "idle" });
  const { latitude, longitude, name } = useParams();

  const lat = Number(latitude);
  const lon = Number(longitude);
  const validCoords = Number.isFinite(lat) && Number.isFinite(lon);

  useEffect(() => {
    if (!validCoords) return;
    const fetchForecast = async () => {
      setState({ status: "loading" });
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,apparent_temperature,wind_speed_10m,weather_code`,
        );

        if (!response.ok) {
          throw new Error(`HTTP Error! ${response.status}`);
        }

        const data: Forecast = await response.json();
        setState({
          status: "success",
          data: data.current,
        });
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Unknown error";
        setState({ status: "error", message });
      }
    };

    fetchForecast();
  }, [lat, lon, validCoords]);

  return (
    <div className="flex min-h-screen flex-col p-4 text-center">
      {!validCoords && (
        <div>
          <i className="bi bi-geo-alt-fill p-4 text-4xl"></i>
          <p className="text-2xl text-berry-dark dark:text-berry">
            Invalid coordinates.
          </p>
        </div>
      )}
      {state.status === "loading" && (
        <div>
          <i className="bi bi-arrow-repeat p-4 text-4xl"></i>
          <p className="text-2xl">Loading forecast...</p>
        </div>
      )}
      {state.status === "error" && (
        <div>
          <i className="bi bi-bug-fill p-4 text-4xl"></i>
          <p className="text-2xl text-berry-dark dark:text-berry">
            Something went wrong: {state.message}
          </p>
          <p>
            Looks like you found a bug! Please contact me with details of the
            error.
          </p>
        </div>
      )}
      {state.status === "success" && (
        <WeatherCard data={state.data} name={name} />
      )}
    </div>
  );
}
