import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import SearchBar from "../components/SearchBar";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

interface HomePageProps {
  isDarkMode: boolean;
}

interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}

type FetchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: Location };

export default function HomePage({ isDarkMode }: HomePageProps) {
  const navigate = useNavigate();
  const [state, setState] = useState<FetchState>({ status: "idle" });
  const [locationQuery, setLocationQuery] = useState("");

  function onSearch(query: string) {
    setLocationQuery(query);
  }

  useEffect(() => {
    if (!locationQuery) return;

    const fetchLocation = async () => {
      setState({ status: "loading" });
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${locationQuery}&count=1`,
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data: { results?: Location[] } = await response.json();
        if (!data.results || data.results.length === 0) {
          setState({
            status: "error",
            message: `No city found for ${locationQuery}`,
          });
          return;
        }

        const location = data.results[0];
        navigate(`/weather/${location.latitude}/${location.longitude}`);
      } catch (error: Error | unknown) {
        const message =
          error instanceof Error ? error.message : "Unknown error";
        setState({ status: "error", message });
      }
    };

    fetchLocation();
  }, [locationQuery, navigate]);

  return (
    <div className="flex min-h-screen flex-col p-4 text-center">
      <img
        src={isDarkMode ? moon : sun}
        className="self-center"
        alt={
          isDarkMode
            ? "smiling moon peeking over the search bar"
            : "sun peeking over the search bar"
        }
        width={1000}
      />
      <SearchBar onSearch={onSearch} />
      {state.status === "loading" && <p>Searching location...</p>}
      {state.status === "error" && (
        <p className="text-berry-dark dark:text-berry">
          Something went wrong: {state.message}
        </p>
      )}
    </div>
  );
}
