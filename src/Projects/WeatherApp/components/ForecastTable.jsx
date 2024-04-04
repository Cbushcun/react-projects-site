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
    <table className="w-full text-center text-lg">
      <thead className="border-primary border-b-2">
        <tr>
          <th></th>
          <th>Weather</th>
          <th>High</th>
          <th>Low</th>
          <th>Rain</th>
          <th>Wind</th>
        </tr>
      </thead>
      <tbody className="border-secondary">
        {data.daily.map((day, index) => (
          <ForecastTableRow key={index} data={day} />
        ))}
      </tbody>
    </table>
  );
}
