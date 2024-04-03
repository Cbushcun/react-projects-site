/**
 * Renders the focused weather component.
 *
 * @param {Object} data - The weather data.
 * @param {string} data.icon - The name of the weather icon.
 * @param {string} data.color - The color of the weather icon.
 * @param {number} data.size - The size of the weather icon.
 * @param {boolean} data.animate - Whether to animate the weather icon.
 * @returns {JSX.Element} The rendered focused weather component.
 */
import ReactAnimatedWeather from "react-animated-weather";

export default function FocusedWeather({ data }) {
  /* structure of 
  data = {
    icon: "WEATHER_ICON_NAME",
    color: "weather-icon-color",
    size: 150, // size of the icon int
    animate: true,
  }
  */
  return (
    <div className="flex pt-5">
      <div className="mx-auto">
        <ReactAnimatedWeather
          icon={data.icon}
          color={data.color}
          size={data.size}
          animate={data.animate}
        />
      </div>
    </div>
  );
}
