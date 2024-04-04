import "../stylesheets/WebDevIndex.css";
import WebDevNavlist from "../components/WebDevNavlist";
import WebDevNavbar from "../components/WebDevNavbar";

import "../stylesheets/LabIIIPII.css";

/**
 * Renders the LabIIIPII component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.showNavProp - Determines whether to show the navigation bar.
 * @param {function} props.onNavClickProp - The callback function for navigation clicks.
 * @returns {JSX.Element} The LabIIIPII component.
 */
export default function LabIIIPII({ showNavProp, onNavClickProp }) {
  return (
    <div className="web-dev-body">
      <div className="ball-one"></div>
      <div className="ball-two"></div>
      <div className="backdrop-blur"></div>
      <WebDevNavbar
        showNavProp={showNavProp}
        onNavClickProp={onNavClickProp}
        tabTitleText="Lab 3 pt 2 IT3203"
      />
      <div className="web-dev-container">
        <div className="topics">
          <ul>
            <li>Fonts</li>
            <li>Adaptive Measurements</li>
            <li>Readability</li>
          </ul>
        </div>
        <main className="backdrop">
          <div className="content inconsolata">
            <p>
              From this class I have learned various things that go into the web
              building process. One of the important things I have learned was
              how to choose fonts to improve readability. It is important to use
              readable fonts because many users are going to be visiting your
              site. Having a clean font with slight spacing in between the texts
              can allow many users to have an easier time reading all of the
              content on your webpage.
            </p>
            <p>
              Another thing I have learned that plays into the last topic is the
              units that are used to set sizing of elements in the web page. It
              is best to use units such as <i>em</i> or <i>%</i> due to the
              ability of those measurements scaling with the size of the
              screen/window rather than using absolute pixel measurements in
              order to position things on the webpage. This allows for more
              variation in your page and prevents any issues that you may run
              into due to using absolute pixel sizing.
            </p>
            <p>
              The final things I have learned is readability. This encapsulates
              the topics previously described but considers the whole page and
              how it is laid out. It is also important to think about color
              scheme and positioning of things on the website. You do not want
              to have drastic color differences such as pure white on a pure
              black background when building a dark theme website. It strains
              the eyes and lowers the time an individual can look at the screen.
              You must also be mindful of the layout of your website so that it
              is easy to read and there are not stray or intrusive elements that
              distract the viewer or lessens their experience by being there.
              Too much information on one page is not good so spreading out
              information when possible without adding too much navigation is a
              balance that must be found.
            </p>
          </div>
        </main>
        <WebDevNavlist showNavProp={showNavProp} />
      </div>
    </div>
  );
}
