import "../stylesheets/WebDevIndex.css";
import WebDevNavlist from "../components/WebDevNavlist";
import WebDevNavbar from "../components/WebDevNavbar";

import "../stylesheets/LabIIPI.css";

import chisels from "../tools/chisels.jpg";
import farmHoe from "../tools/hoe.jpg";
import saw from "../tools/saw.jpg";

/**
 * Renders the LabIIPI component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.showNavProp - Determines whether to show the navigation bar.
 * @param {function} props.onNavClickProp - The function to be called when a navigation item is clicked.
 * @returns {JSX.Element} The LabIIPI component.
 */
export default function LabIIPI({ showNavProp, onNavClickProp }) {
  return (
    <div className="web-dev-body">
      <div className="ball-one"></div>
      <div className="ball-two"></div>
      <div className="backdrop-blur"></div>
      <WebDevNavbar
        showNavProp={showNavProp}
        onNavClickProp={onNavClickProp}
        tabTitleText="Lab 2 Pt 1 IT3203"
      />
      <div className="container">
        <main className="backdrop">
          <div className="content inconsolata">
            <div className="tool-container">
              <img
                src={chisels}
                height="199"
                width="300"
                alt="A set of three differently sized chisels."
              />
              <p>
                Set of three heavy duty chisels for all of your sculpting needs.
                Made from high quality steel for effeciency and longevity.
              </p>
            </div>
            <div className="tool-container">
              <img
                src={farmHoe}
                height="215"
                width="258"
                alt="A singular hoe against a white background"
              />
              <p>
                Heavy duty hoe made from oakwood for durability and steel to
                prevent bending and breakage of the headpiece.
              </p>
            </div>
            <div className="tool-container">
              <img
                src={saw}
                height="237"
                width="289"
                alt="A singular saw against a white background"
              />
              <p>
                Heavy duty hand saw made from steel. Sharp and ready for use
                after being removed from the protective saftey packaging.
              </p>
            </div>
          </div>
        </main>
        <WebDevNavlist showNavProp={showNavProp} />
      </div>
    </div>
  );
}
