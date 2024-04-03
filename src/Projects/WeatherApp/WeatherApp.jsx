/**
 * WeatherApp component displays a weather application.
 * It allows users to search for weather information by city.
 */
import { useEffect, useState } from "react";

import "../../App.css";
import FocusedWeather from "./components/FocusedWeather";
import HourlyWeather from "./components/HourlyWeather";

export default function WeatherApp() {
  // variables holding icon data for the FocusedWeather and HourlyWeather components
  const primaryIcon = {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 150,
    animate: true,
  };

  const hourlyIcons = {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 50,
    animate: true,
  };

  return (
    <section className="font-inconsolata flex h-screen w-screen flex-col bg-blue-950 bg-cover p-3 text-stone-200">
      <div className="container flex flex-col">
        <div className="mt-3 flex max-h-14 w-full">
          <input
            type="text"
            name="search-bar"
            id="searchBar"
            className="w-5/6 rounded-l-full p-2"
            placeholder="Search..."
          />
          <button className="flex w-1/6 min-w-14 rounded-r-full bg-amber-500 transition duration-150 hover:bg-amber-600 ">
            <p className="m-auto">Search</p>
          </button>
        </div>
        <FocusedWeather data={primaryIcon} />
        <div className="mt-4 text-center">
          <h1 className="text-5xl">Atlanta</h1>
          <h5>30% chance of rain today</h5>
        </div>
        <div className="flex justify-between pt-3">
          <HourlyWeather data={hourlyIcons} />
          <HourlyWeather data={hourlyIcons} />
          <HourlyWeather data={hourlyIcons} />
          <HourlyWeather data={hourlyIcons} />
          <HourlyWeather data={hourlyIcons} />
          <HourlyWeather data={hourlyIcons} />
        </div>
        <div>
          <table>
            <thead>
              <th></th>
              <th>Temp</th>
            </thead>
          </table>
        </div>
      </div>
    </section>
  );
}
