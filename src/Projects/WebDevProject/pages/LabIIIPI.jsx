import "../stylesheets/WebDevIndex.css";
import WebDevNavlist from "../components/WebDevNavlist";
import WebDevNavbar from "../components/WebDevNavbar";

import "../stylesheets/LabIIIPI.css";

/**
 * Renders the LabIIIPI component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.showNavProp - Determines whether to show the navigation.
 * @param {function} props.onNavClickProp - The function to be called when the navigation is clicked.
 * @returns {JSX.Element} The LabIIIPI component.
 */
export default function LabIIIPI({ showNavProp, onNavClickProp }) {
  return (
    <div className="web-dev-body">
      <div className="ball-one"></div>
      <div className="ball-two"></div>
      <div className="backdrop-blur"></div>
      <WebDevNavbar
        showNavProp={showNavProp}
        onNavClickProp={onNavClickProp}
        tabTitleText="Lab 3 Pt 1 IT3203"
      />
      <div className="web-dev-container">
        <main>
          <div className="content inconsolata">
            <ol type="I">
              <li className="pnk">Proterozoic</li>
              <li className="blu">
                Paleozoic
                <ol type="A">
                  <li>Cambrian</li>
                  <li>Ordovician</li>
                  <li>Silurian</li>
                  <li>Devonian</li>
                  <li>Mississippian</li>
                  <li>Pennsylvanian</li>
                  <li>Permian</li>
                </ol>
              </li>
              <li className="grn">
                Mesozoic
                <ol type="A">
                  <li>Triassic</li>
                  <li>Jurassic</li>
                  <li>Cretaceous</li>
                </ol>
              </li>
              <li className="red">
                Cenozoic
                <ol type="A">
                  <li>
                    Paleogene
                    <ol>
                      <li>Paleocene</li>
                      <li>Eocene</li>
                      <li>Oligocene</li>
                    </ol>
                  </li>
                  <li>
                    Neogene
                    <ol>
                      <li>Miocene</li>
                      <li>Pilocene</li>
                      <li>Pleistocene</li>
                      <li>Holocene</li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </main>
        <WebDevNavlist showNavProp={showNavProp} />
      </div>
    </div>
  );
}
