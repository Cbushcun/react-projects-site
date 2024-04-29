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
import WeatherSummary from "./components/WeatherSummary";
import HourPrecipitation from "./components/HourPrecipitation";
import Next24Hours from "./components/Next24Hours";

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
  const geoCodeReverseURI = "https://api.openweathermap.org/geo/1.0/reverse?";
  const oneCallURI = "https://api.openweathermap.org/data/3.0/onecall?";

  /**
   * Retrieves the location name based on the provided latitude and longitude.
   * @param {number} lat - The latitude of the location.
   * @param {number} lon - The longitude of the location.
   * @returns {Promise<void>} - A promise that resolves when the location name is retrieved.
   */
  const getLocationName = async (lat, lon) => {
    try {
      const response = await axios.get(geoCodeReverseURI, {
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

  /**
   * Fetches weather data from the API based on latitude, longitude, and icon size.
   *
   * @param {number} lat - The latitude of the location.
   * @param {number} lon - The longitude of the location.
   * @param {string} iconSize - The size of the weather icons.
   * @returns {Promise<void>} - A promise that resolves when the weather data is fetched and set.
   */
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
            rain: hour.rain ? Math.round(hour.rain["1h"] * 100) : 0,
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
            rain: day.pop ? Math.round(day.pop * 100) : 0,
            wind: Math.round(day.wind_speed),
          }))
          .slice(0, 7),
      });
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Retrieves weather data from the user's current location.
   */
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

  // Effect: Fetch weather data from the user's current location on initial load
  useEffect(() => {
    getWeatherDataFromLocation();
  }, []);

  // Effect: Fetch weather data based on the city, state, temperature unit, latitude, and longitude updates
  useEffect(() => {
    getWeatherData(lat, lon, iconSize);
  }, [cityState.city, cityState.state, temperatureUnit]);

  return (
    <>
      {/*<section className="font-inconsolata min-w-screen flex h-fit min-h-screen w-full flex-col bg-blue-950 p-3 text-stone-200">
      <div className="container mx-auto flex h-full max-w-4xl flex-col justify-between gap-3 pb-10">
        <SearchBar setLat={setLat} setLon={setLon} />
        <FocusedWeather data={weatherData} />
        <ForecastByHour data={weatherData} />
        <ForecastTable data={weatherData} />
      </div>
  </section>*/}
      <section className="font-inconsolata min-w-screen h-fit min-h-screen w-full bg-blue-950 text-stone-200">
        <div className="container mx-auto grid h-full max-w-4xl">
          <div className="flex h-14 p-2">
            <input type="text" className="flex-grow rounded-l-full" />
            <button className="ml-auto rounded-r-full bg-amber-500 px-2 text-stone-950">
              Search
            </button>
          </div>
          <WeatherSummary />
          <HourPrecipitation />
          <Next24Hours />
          <table className="text-center">
            <thead>
              <tr>
                <th></th>
                <th>High</th>
                <th>Low</th>
                <th>Rain</th>
                <th>Wind</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>75&deg;F</td>
                <td>60&deg;F</td>
                <td>20%</td>
                <td>5 mph</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>80&deg;F</td>
                <td>65&deg;F</td>
                <td>10%</td>
                <td>10 mph</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>85&deg;F</td>
                <td>70&deg;F</td>
                <td>5%</td>
                <td>15 mph</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>80&deg;F</td>
                <td>65&deg;F</td>
                <td>10%</td>
                <td>10 mph</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>75&deg;F</td>
                <td>60&deg;F</td>
                <td>20%</td>
                <td>5 mph</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>70&deg;F</td>
                <td>55&deg;F</td>
                <td>30%</td>
                <td>0 mph</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>75&deg;F</td>
                <td>60&deg;F</td>
                <td>20%</td>
                <td>5 mph</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td>80&deg;F</td>
                <td>65&deg;F</td>
                <td>10%</td>
                <td>10 mph</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
