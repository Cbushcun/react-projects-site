/**
 * WeatherApp component displays a weather application.
 * It allows users to search for weather information by city.
 */
import { useEffect, useState } from "react";

import "../../App.css";
import FocusedWeather from "./components/FocusedWeather";

import axios from "axios";
import ForecastTable from "./components/ForecastTable";
import ForecastByHour from "./components/ForecastByHour";
import SearchBar from "./components/Searchbar";

/**
 * WeatherApp component displays a weather application.
 * It fetches weather data from openweathermap.org and renders the current weather, hourly weather, and daily weather.
 * @returns {JSX.Element} WeatherApp component
 */
export default function WeatherApp() {
  const [iconSize, setIconSize] = useState("@2x.png");
  const [temperatureUnit, setTemperatureUnit] = useState("imperial");
  const [lat, setLat] = useState(40.7128);
  const [lon, setLon] = useState(-74.006);
  const [cityState, setCityState] = useState({
    city: "Unknown",
    state: "Unknown",
  });
  const [searchTerm, setSearchTerm] = useState("");
  // State/Variable: Handle data for current weather, hourly weather, and daily weather
  const [weatherData, setWeatherData] = useState({
    location: {},
    current: {},
    hourly: [],
    daily: [],
  });
  // State/Variable: URI Links for fetching data
  const geoCodeURI = "http://api.openweathermap.org/geo/1.0/reverse?";
  const oneCallURI = "https://api.openweathermap.org/data/3.0/onecall?";

  // Function: Get location name from coordinates TODO:
  const getLocationName = async (lat, lon) => {
    try {
      const response = await axios.get(geoCodeURI, {
        params: {
          lat,
          lon,
          limit: 1,
          appid: import.meta.env.VITE_WEATHER_API_KEY,
        },
      });
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      setCityState({
        city: response.data[0].name,
        state: response.data[0].state,
      });
    } catch (error) {
      console.error(error);
      setCityState({ name: "Unknown", state: "Unknown" });
    }
  };

  // Function: Get data from coordinates
  const getWeatherData = async (lat, lon, iconSize) => {
    getLocationName(lat, lon);
    setIconSize(iconSize);
    try {
      const response = await axios.get(oneCallURI, {
        params: {
          lat,
          lon,
          units: temperatureUnit,
          appid: import.meta.env.VITE_WEATHER_API_KEY,
        },
      });
      const data = response.data;
      setWeatherData({
        location: { name: cityState.city, state: cityState.state },
        current: {
          temp: Math.round(data.current.temp),
          feels_like: Math.round(data.current.feels_like),
          weather: data.current.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.current.weather[0].icon}${iconSize}`,
        },
        hourly: data.hourly
          .map((hour) => ({
            timeLocal: new Date(hour.dt * 1000).toLocaleTimeString("en-US", {
              hour: "numeric",
              hour12: true,
            }),
            temp: Math.round(hour.temp),
            icon: `https://openweathermap.org/img/wn/${hour.weather[0].icon}${iconSize}`,
            rain: hour.rain ? hour.rain["1h"] : 0,
          }))
          .slice(0, 6),
        daily: data.daily
          .map((day) => ({
            timeLocal: new Date(day.dt * 1000).toLocaleDateString("en-US", {
              weekday: "long",
            }),
            weather: day.weather[0].main,
            high: Math.round(day.temp.max),
            low: Math.round(day.temp.min),
            rain: day.pop ? Math.round(day.pop) : 0,
            wind: Math.round(day.wind_speed),
          }))
          .slice(0, 7),
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Function: Obtain user lat/lon from browser and fetch data
  const getWeatherDataFromLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      getWeatherData(
        position.coords.latitude,
        position.coords.longitude,
        iconSize,
      );
    });
  };

  useEffect(() => {
    getWeatherDataFromLocation();
  }, []);
  useEffect(() => {
    getWeatherData(lat, lon, iconSize);
  }, [cityState.city, cityState.state, temperatureUnit, lat, lon]);
  return (
    <section className="font-inconsolata flex h-screen w-screen flex-col bg-blue-950 bg-cover p-3 text-stone-200">
      <div className="container mx-auto flex h-full max-w-4xl flex-col justify-between pb-10">
        <SearchBar setLat={setLat} setLon={setLon} geoCodeURI={geoCodeURI} />
        <FocusedWeather data={weatherData} />
        <ForecastByHour data={weatherData} />
        <ForecastTable data={weatherData} />
      </div>
    </section>
  );
}
