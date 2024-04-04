import HourlyWeather from "./HourlyWeather";

export default function ForecastByHour({ data }) {
  return (
    <div className="mx-auto flex w-full justify-between overflow-x-auto">
      {data.hourly.map((hour, index) => (
        <HourlyWeather key={index} data={hour} />
      ))}
    </div>
  );
}
