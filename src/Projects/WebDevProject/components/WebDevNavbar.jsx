import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../stylesheets/WebDevIndex.css";

export default function WebDevNavBar({
  showNavProp,
  onNavClickProp,
  tabTitleText,
}) {
  return (
    <>
      <Helmet>
        <title>{tabTitleText}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Honk:MORF,SHLN@0,42.7&family=Inconsolata:wght@200..900&family=Zilla+Slab+Highlight&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <nav className="nav funky-text">
        <p>
          <Link to="/introtowebdev">Christian Bush | IT3203</Link>
        </p>
        <p>Homepage</p>
        <button onClick={onNavClickProp} id="nav-btn" className="gradient">
          <i
            id="nav-icon"
            className={`${showNavProp ? "rotate-icon" : ""} fa-solid fa-square-caret-down`}
          ></i>
        </button>
      </nav>
    </>
  );
}
