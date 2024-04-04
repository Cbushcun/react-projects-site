export default function ForecastTableRow({ data }) {
  //current day variable to check if the day is today
  const currentDay = new Date().toLocaleDateString([], {
    weekday: "long",
  });
  return (
    <tr className="border-b-[1px] last-of-type:border-b-0">
      <th
        className={`${data.timeLocal === currentDay ? "f font-black text-amber-500" : "font-medium"} text-left`}
      >
        {data.timeLocal === currentDay ? "Today" : data.timeLocal}
      </th>
      <td>{data.weather}</td>
      <td>{data.high}&deg;</td>
      <td>{data.low}&deg;</td>
      <td>{data.rain}%</td>
      <td>{data.wind} mph</td>
    </tr>
  );
}
