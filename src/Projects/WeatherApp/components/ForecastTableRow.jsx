/**
 * Renders a table row for the weather forecast.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.data - The weather data for the row.
 * @returns {JSX.Element} The rendered table row.
 */
export default function ForecastTableRow({ data }) {
  //current day variable to check if the day is today
  const currentDay = new Date().toLocaleDateString([], {
    weekday: "long",
  });
  return (
    <tr className="border-b-[1px] last-of-type:border-b-0">
      <th
        className={`${data.timeLocal === currentDay ? "f font-black text-amber-500" : "font-medium"} pl-3 text-left`}
      >
        {data.timeLocal === currentDay ? "Today" : data.timeLocal}
      </th>
      <td>{data.weather}</td>
      <td>{data.high}&deg;</td>
      <td>{data.low}&deg;</td>
      <td>{data.rain}%</td>
    </tr>
  );
}
