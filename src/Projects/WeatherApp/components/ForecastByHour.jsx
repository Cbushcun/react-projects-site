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
    <div className="mx-auto flex w-full justify-between overflow-x-auto">
      {data.hourly.map((hour, index) => (
        <HourlyWeather key={index} data={hour} />
      ))}
    </div>
  );
}
