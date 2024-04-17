/**
 * WeatherApp component displays a weather application.
 * It allows users to search for weather information by city.
 */
import { useEffect, useState } from "react";

/**
 * ChartJS Bar components for displaying precipitation data.
 */
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

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
          <div>
            <span className="flex text-3xl after:mt-auto after:text-xl after:opacity-60 after:content-['Wednesday']">
              <i className="fa-solid fa-calendar-day my-auto mr-2 text-lg"></i>
              November 15 2021
            </span>
            <span className="flex text-3xl">
              <i className="fa-solid fa-location-dot my-auto mr-2 text-lg"></i>
              Powder Springs, Georgia
            </span>
            <hr className="mx-auto w-11/12 opacity-60" />
            <div className="flex text-3xl">
              <span className="my-auto ml-auto">Now</span>
              <div className="mx-auto my-auto h-20 w-px bg-stone-200 opacity-60"></div>
              <div className="mr-auto flex">
                <img
                  src="https://openweathermap.org/img/wn/10d@2x.png"
                  alt="icon representing the currently displayed weather"
                  className="my-auto"
                />
                <div className="flex flex-col text-center">
                  <span className="my-auto text-2xl">70&deg;F</span>
                  <span className="my-auto text-2xl">Clear</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-stone-200/20 outline">
            <span className="w-full bg-stone-200/20">
              Next hour precipitation
            </span>
            <span>Expected to rain until 7:15pm</span>
            <div className="h-28 w-full">
              <Bar
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      ticks: {
                        color: "rgba(255, 255, 255, 0.60)",
                        callback: function (value, index, values) {
                          // Display only every 10th label
                          return index % 10 === 0 ? value + "m" : "";
                        },
                      },
                    },
                    y: {
                      ticks: {
                        color: "rgba(255, 255, 255, 0.60)",
                      },
                    },
                  },
                }}
                data={{
                  labels: Array.from({ length: 61 }, (_, i) => i + "m"),
                  datasets: [
                    {
                      label: "rainfall in milimeters",
                      data: [
                        8, 10, 12, 14, 8, 4, 2, 2, 3, 5, 8, 10, 12, 14, 8, 4, 2,
                        2, 3, 5, 8, 10, 12, 14, 8, 4, 2, 2, 3, 5, 8, 10, 12, 14,
                        8, 4, 2, 2, 3, 5, 8, 10, 12, 14, 8, 4, 2, 2, 3, 5, 8,
                        10, 12, 14, 8, 4, 2, 2, 3, 5,
                      ],
                      backgroundColor: "rgba(0, 171, 255, 0.75)",
                      borderRadius: 100,
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className="flex h-44 flex-col overflow-hidden bg-stone-200/20">
            <span className="bg-stone-200/20">Next 24 hours</span>
            <span className="flex overflow-auto">
              <div className="flex min-w-20 flex-col text-center">
                <span className="font-bold">Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto font-semibold">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
              <div className="flex min-w-20 flex-col text-center">
                <span>Now</span>
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon representing the currently displayed weather"
                    className="mx-auto"
                  />
                  <span className="flex w-full">
                    <span className="mx-auto">
                      <i class="fa-solid fa-umbrella my-auto text-xs"></i>
                      30%
                    </span>
                  </span>
                </div>
                <span className="mt-auto">70&deg;F</span>
              </div>
            </span>
          </div>
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
                <td className="text-left font-semibold text-stone-200/70">
                  Today
                </td>
                <td>75&deg;F</td>
                <td>60&deg;F</td>
                <td>20%</td>
                <td>5 mph</td>
              </tr>
              <tr>
                <td className="text-left font-semibold text-stone-200/70">
                  Tuesday
                </td>
                <td>80&deg;F</td>
                <td>65&deg;F</td>
                <td>10%</td>
                <td>10 mph</td>
              </tr>
              <tr>
                <td className="text-left font-semibold text-stone-200/70">
                  Wednesday
                </td>
                <td>85&deg;F</td>
                <td>70&deg;F</td>
                <td>5%</td>
                <td>15 mph</td>
              </tr>
              <tr>
                <td className="text-left font-semibold text-stone-200/70">
                  Thursday
                </td>
                <td>80&deg;F</td>
                <td>65&deg;F</td>
                <td>10%</td>
                <td>10 mph</td>
              </tr>
              <tr>
                <td className="text-left font-semibold text-stone-200/70">
                  Friday
                </td>
                <td>75&deg;F</td>
                <td>60&deg;F</td>
                <td>20%</td>
                <td>5 mph</td>
              </tr>
              <tr>
                <td className="text-left font-semibold text-stone-200/70">
                  Saturday
                </td>
                <td>70&deg;F</td>
                <td>55&deg;F</td>
                <td>30%</td>
                <td>0 mph</td>
              </tr>
              <tr>
                <td className="text-left font-semibold text-stone-200/70">
                  Sunday
                </td>
                <td>75&deg;F</td>
                <td>60&deg;F</td>
                <td>20%</td>
                <td>5 mph</td>
              </tr>
              <tr>
                <td className="text-left font-semibold text-stone-200/70">
                  Monday
                </td>
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
