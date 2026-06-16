import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

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

export default function SearchPage() {
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
    <div className="flex min-h-screen flex-col p-4 text-center">
      <SearchBar onSearch={onSearch} />
      {state.status === "loading" && <p>Searching location...</p>}
      {state.status === "error" && <p>Something went wrong: {state.message}</p>}
      {state.status === "success" && (
        <p>
          Found: {state.data.name}, {state.data.country} — {state.data.latitude}
          , {state.data.longitude}
        </p>
      )}
    </div>
  );
}
