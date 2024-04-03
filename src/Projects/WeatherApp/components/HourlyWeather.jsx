// Import the ReactAnimatedWeather component from the "react-animated-weather" library
import ReactAnimatedWeather from "react-animated-weather";

export default function HourlyWeather({ data }) {
  return (
    <div className="text-center">
      <div className="max-w-fit">
        <div>Now</div>
        <ReactAnimatedWeather
          icon={data.icon}
          color={data.color}
          size={data.size}
          animate={data.animate}
        />
        <span>43</span>
      </div>
    </div>
  );
}
