export default function WeatherSummary() {
  return (
    <>
      <span className="flex text-3xl after:mt-auto after:text-xl after:opacity-60 after:content-['Wednesday']">
        <i className="fa-solid fa-calendar-day my-auto mr-2 text-lg"></i>
        November 15 2021
      </span>
      <span className="flex text-3xl">
        <i className="fa-solid fa-location-dot my-auto mr-2 text-lg"></i>
        Powder Springs, Georgia
      </span>
      <hr className="mx-auto w-11/12 opacity-60" />
      <div className="flex text-3xl">
        <span className="my-auto ml-auto">Now</span>
        <div className="mx-auto my-auto h-20 w-px bg-stone-200 opacity-60"></div>
        <div className="mr-auto flex">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="icon representing the currently displayed weather"
            className="my-auto"
          />
          <div className="flex flex-col text-center">
            <span className="my-auto text-2xl">70&deg;F</span>
            <span className="my-auto text-2xl">Clear</span>
          </div>
        </div>
      </div>
    </>
  );
}
