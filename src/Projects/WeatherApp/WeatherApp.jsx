import { useEffect, useState } from "react";
import { getInfoByCity } from "./apiUtils";

export default function WeatherApp() {
  const bgImage =
    "https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const [cityName, setCityName] = useState("Default Name");

  function handleClick() {}

  return (
    <section
      className="flex h-screen w-screen bg-stone-800 bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <button onClick={handleClick} className="m-auto bg-stone-500/40 p-2">
        {cityName}
      </button>
    </section>
  );
}
