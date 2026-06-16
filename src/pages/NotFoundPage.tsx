import { useState, useEffect } from "react";
import { Link } from "react-router";
import SearchBar from "../components/SearchBar";
import cloud from "../assets/404.png";

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

export default function NotFoundPage() {
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

        setState({ status: "success", data: data.results[0] });
      } catch (error: Error | unknown) {
        const message =
          error instanceof Error ? error.message : "Unknown error";
        setState({ status: "error", message });
      }
    };

    fetchLocation();
  }, [locationQuery]);

  return (
    <div className="flex flex-col px-4 text-center">
      <h2 className="text-6xl font-black text-chicory-dark">404</h2>
      <h3 className="text-4xl font-black text-chicory-dark">Page Not Found</h3>
      <img
        className="self-center"
        src={cloud}
        alt="sad blue cloud illustration"
        width={350}
      />
      <SearchBar onSearch={onSearch} />
      {state.status === "loading" && <p>Searching location...</p>}
      {state.status === "error" && <p>Something went wrong: {state.message}</p>}
      {state.status === "success" && (
        <p>
          Found: {state.data.name}, {state.data.country} — {state.data.latitude}
          , {state.data.longitude}
        </p>
      )}
      <p className="pt-8 text-xl">
        Woah, looks like a storm knocked you off your course!
      </p>
      <p className="text-xl">
        Search for a location above or <Link to="/">click here</Link> to return
        to the home page.
      </p>
    </div>
  );
}
