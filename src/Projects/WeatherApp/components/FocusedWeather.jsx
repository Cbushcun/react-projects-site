/**
 * Renders the focused weather component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.data - The weather data.
 * @returns {JSX.Element} The rendered component.
 */
export default function FocusedWeather({ data }) {
  /**
   * Converts a string to title case.
   *
   * @param {string} str - The string to convert.
   * @returns {string} The converted string in title case.
   */
  const toTitleCase = (str) => {
    if (str) {
      return str.replace(/\b\w/g, (char) => char.toUpperCase());
    }
  };

  return (
    <div className="flex pt-5 text-center">
      <div className="mx-auto flex flex-col">
        <img
          src={data.current.icon}
          alt="An icon representing the current weather at selected location"
          className="mx-auto"
        />
        <span className="text-5xl font-bold">{data.current.temp}&deg;</span>
        <span className="font-semibold">
          Feels Like {data.current.feels_like}&deg;
        </span>
        <h1 className="text-4xl">
          {data.location.state
            ? `${toTitleCase(data.location.name)}, ${toTitleCase(data.location.state)}`
            : toTitleCase(data.location.name)}
        </h1>
        <h5 className="mt-2 text-2xl">{toTitleCase(data.current.weather)}</h5>
      </div>
    </div>
  );
}
