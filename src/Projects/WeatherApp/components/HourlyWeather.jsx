import "../stylesheets/WeatherApp.css";

export default function HourlyWeather({ data }) {
  // obtain current time to check if data.timeLocal is the current hour
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "numeric",
    hour12: true,
  });
  return (
    <div className="flex max-w-fit flex-col text-center">
      <div className="flex flex-col">
        <span
          className={`${data.timeLocal === currentTime ? "f font-black text-amber-500" : ""}`}
        >
          {data.timeLocal === currentTime ? "Now" : data.timeLocal}
        </span>
        <img
          src={data.icon ? data.icon : "https://via.placeholder.com/50"}
          alt={
            data.icon
              ? "An image of the currently displayed weather for the hour"
              : "a placeholder image for the currently displayed weather for the hour"
          }
        />
      </div>
      <span className="text-xl">{data.temp}&deg;F</span>
      <span className="flex justify-center gap-1">
        <i className="fa-solid fa-umbrella my-auto text-sm"></i>
        <span> {data.rain}%</span>
      </span>
    </div>
  );
}
