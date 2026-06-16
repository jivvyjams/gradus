// Maps WMO weather interpretation codes (used by Open-Meteo) to a human-readable
// label and a Bootstrap Icons class. See: https://open-meteo.com/en/docs

export interface WeatherInfo {
  label: string;
  icon: string;
}

const WEATHER_CODES: Record<number, WeatherInfo> = {
  0: { label: "Clear sky", icon: "bi-sun-fill" },
  1: { label: "Mainly clear", icon: "bi-cloud-sun-fill" },
  2: { label: "Partly cloudy", icon: "bi-cloud-sun-fill" },
  3: { label: "Overcast", icon: "bi-clouds-fill" },
  45: { label: "Fog", icon: "bi-cloud-fog2-fill" },
  48: { label: "Depositing rime fog", icon: "bi-cloud-fog2-fill" },
  51: { label: "Light drizzle", icon: "bi-cloud-drizzle-fill" },
  53: { label: "Moderate drizzle", icon: "bi-cloud-drizzle-fill" },
  55: { label: "Dense drizzle", icon: "bi-cloud-drizzle-fill" },
  56: { label: "Light freezing drizzle", icon: "bi-cloud-drizzle-fill" },
  57: { label: "Dense freezing drizzle", icon: "bi-cloud-drizzle-fill" },
  61: { label: "Slight rain", icon: "bi-cloud-rain-fill" },
  63: { label: "Moderate rain", icon: "bi-cloud-rain-fill" },
  65: { label: "Heavy rain", icon: "bi-cloud-rain-heavy-fill" },
  66: { label: "Light freezing rain", icon: "bi-cloud-rain-fill" },
  67: { label: "Heavy freezing rain", icon: "bi-cloud-rain-heavy-fill" },
  71: { label: "Slight snow", icon: "bi-cloud-snow-fill" },
  73: { label: "Moderate snow", icon: "bi-cloud-snow-fill" },
  75: { label: "Heavy snow", icon: "bi-cloud-snow-fill" },
  77: { label: "Snow grains", icon: "bi-cloud-snow-fill" },
  80: { label: "Slight rain showers", icon: "bi-cloud-rain-fill" },
  81: { label: "Moderate rain showers", icon: "bi-cloud-rain-fill" },
  82: { label: "Violent rain showers", icon: "bi-cloud-rain-heavy-fill" },
  85: { label: "Slight snow showers", icon: "bi-cloud-snow-fill" },
  86: { label: "Heavy snow showers", icon: "bi-cloud-snow-fill" },
  95: { label: "Thunderstorm", icon: "bi-cloud-lightning-rain-fill" },
  96: { label: "Thunderstorm with slight hail", icon: "bi-cloud-lightning-rain-fill" },
  99: { label: "Thunderstorm with heavy hail", icon: "bi-cloud-lightning-rain-fill" },
};

export function getWeatherInfo(code: number): WeatherInfo {
  return (
    WEATHER_CODES[code] ?? { label: "Unknown", icon: "bi-question-circle-fill" }
  );
}
