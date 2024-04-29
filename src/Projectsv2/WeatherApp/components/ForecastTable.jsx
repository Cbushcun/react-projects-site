import ForecastTableRow from "./ForecastTableRow";

/**
 * Renders a table displaying the weather forecast.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.data - The weather forecast data.
 * @returns {JSX.Element} The rendered table component.
 */
export default function ForecastTable({ data }) {
  return (
    <div className="flex flex-col overflow-auto rounded-xl">
      <span className="bg-stone-200/30 text-center text-xl">
        7-Day Forecast
      </span>
      <table className="w-full bg-stone-200/20 text-center text-lg">
        <thead>
          <tr>
            <th></th>
            <th>Weather</th>
            <th>High</th>
            <th>Low</th>
            <th>Rain</th>
          </tr>
        </thead>
        <tbody>
          {data.daily.map((day, index) => (
            <ForecastTableRow key={index} data={day} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
