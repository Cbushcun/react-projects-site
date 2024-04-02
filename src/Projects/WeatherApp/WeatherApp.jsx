import { useEffect, useState } from "react";

export default function WeatherApp() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setdata] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  const bgImage =
    "https://images.unsplash.com/photo-1710169473427-eaed5969b91b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const baseUrl = "http://api.weatherbit.io/v2.0";

  {
    /*async function getCurrentData() {
    axios.get(baseUrl + "/current", {
      params: {

      }
    })
  }*/
  }

  return (
    <section
      className="h-screen max-h-screen w-screen max-w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute h-screen max-h-screen w-screen bg-black/35 "></div>
      <div className="container flex flex-col">
        <div className="bg-bottom text-center text-7xl font-semibold">
          <span id="clock">12:00 PM</span>
        </div>
        <div className="h-10 overflow-hidden rounded-lg">
          <input type="text" className="h-full w-full px-3" />
        </div>
      </div>
    </section>
  );
}
