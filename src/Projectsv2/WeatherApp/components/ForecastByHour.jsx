import HourlyWeather from "./HourlyWeather";

/**
 * Renders the hourly forecast for a given day.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.data - The data containing hourly forecast information.
 * @returns {JSX.Element} The rendered component.
 */
export default function ForecastByHour({ data }) {
  return (
    <div className="flex flex-col overflow-auto rounded-xl">
      <span className="bg-stone-200/30 text-center text-xl">
        Hourly Weather
      </span>
      <div className="flex justify-between bg-stone-200/20 py-3">
        {data.hourly.map((hour, index) => (
          <HourlyWeather key={index} data={hour} />
        ))}
      </div>
    </div>
  );
}
