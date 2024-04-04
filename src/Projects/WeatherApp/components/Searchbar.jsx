import { useEffect, useState } from "react";
import axios from "axios";

/**
 * SearchBar component for searching locations and updating latitude and longitude.
 * @param {Object} props - The component props.
 * @param {function} props.setLat - The function to update the latitude.
 * @param {function} props.setLon - The function to update the longitude.
 * @returns {JSX.Element} The SearchBar component.
 */
export default function SearchBar({ setLat, setLon }) {
  const geoCodeDirectURI = "https://api.openweathermap.org/geo/1.0/direct?";
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchBar = document.getElementById("searchBar");

  /**
   * Fetches coordinates from location name using the OpenWeatherMap API.
   * @param {string} searchTerm - The search term for the location.
   * @returns {Promise<void>} A promise that resolves when the data is fetched.
   */
  const fetchData = async (searchTerm) => {
    try {
      const response = await axios.get(geoCodeDirectURI, {
        params: {
          q: searchTerm,
          limit: 5,
          appid: import.meta.env.VITE_WEATHER_API_KEY,
        },
      });
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
      setSearchResults([]);
    }
  };

  /**
   * Handles the click event to update the latitude and longitude on button click.
   */
  const handleClick = () => {
    setLat(searchResults[0].lat);
    setLon(searchResults[0].lon);
    setSearchTerm("");
    setSearchResults([]);
  };

  /**
   * Handles the key down event to update the latitude and longitude on Enter key press.
   * @param {Object} e - The key down event object.
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchResults.length > 0) {
      e.preventDefault(); // prevent form submission
      const result = searchResults[0];
      setLat(result.lat);
      setLon(result.lon);
      searchBar.value = "";
      setSearchTerm("");
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (searchTerm.length > 2) {
      fetchData(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="z-50 mt-3 flex max-h-14 w-full flex-col font-semibold text-stone-900">
      <span className="flex">
        <input
          type="text"
          name="search-bar"
          id="searchBar"
          className="w-5/6 rounded-l-full p-2 focus:outline-none"
          placeholder="e.g. New York, NY"
          onChange={(e) => setSearchTerm(e.target.value.trim())}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleClick}
          className="flex w-1/6 min-w-14 rounded-r-full bg-amber-500 transition duration-150 hover:bg-amber-600 "
        >
          <span className="m-auto">Search</span>
        </button>
      </span>
      <ul className="over mx-auto w-5/6 rounded-b-3xl bg-stone-200/60 text-center text-xl backdrop-blur-lg md:w-4/6">
        {searchResults.map((result, index) => (
          <li
            key={index}
            className=" overflow-hidden even:bg-stone-100/10 last-of-type:rounded-b-3xl"
          >
            <button
              onClick={() => {
                setLat(result.lat);
                setLon(result.lon);
                searchBar.value = "";
                setSearchTerm("");
                setSearchResults([]);
              }}
              className="w-full hover:bg-amber-500/70 "
            >
              {result.state
                ? `${result.name}, ${result.state}, ${result.country}`
                : `${result.name}, ${result.country}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
