import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../stylesheets/WebDevIndex.css";

import navArrow from "../assets/nav-arrow.svg";

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
        <button onClick={onNavClickProp} id="nav-btn">
          <img
            src={navArrow}
            alt="an svg button used to open and close the navigation tray"
            className={`${showNavProp ? "flip-180" : ""} h-9`}
          />
        </button>
      </nav>
    </>
  );
}
