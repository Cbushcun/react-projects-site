import ReactAnimatedWeather from "react-animated-weather";

export default function FocusedWeather({ data }) {
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
