import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../stylesheets/WebDevIndex.css";

import navArrow from "../assets/nav-arrow.svg";

/**
 * Renders the navigation bar component for the web development project.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.showNavProp - Determines whether the navigation tray is visible.
 * @param {function} props.onNavClickProp - The function to be called when the navigation button is clicked.
 * @param {string} props.tabTitleText - The title text for the browser tab.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
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
