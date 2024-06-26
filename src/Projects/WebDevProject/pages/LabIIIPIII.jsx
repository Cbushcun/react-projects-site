import "../stylesheets/WebDevIndex.css";
import WebDevNavlist from "../components/WebDevNavlist";
import WebDevNavbar from "../components/WebDevNavbar";

/**
 * Renders the LabIIIPIII component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.showNavProp - Determines whether to show the navigation.
 * @param {function} props.onNavClickProp - The function to be called when the navigation is clicked.
 * @returns {JSX.Element} The LabIIIPIII component.
 */
export default function LabIIIPIII({ showNavProp, onNavClickProp }) {
  return (
    <div className="web-dev-body">
      <div class="ball-one"></div>
      <div class="ball-two"></div>
      <div class="backdrop-blur"></div>
      <WebDevNavbar
        showNavProp={showNavProp}
        onNavClickProp={onNavClickProp}
        tabTitleText="Lab 3 Pt 3 IT3203"
      />
      <div class="web-dev-container">
        <main>
          <div class="content">
            <table>
              <tr>
                <th colspan="2">I.T. News</th>
              </tr>
              <tr>
                <td>Disable UPnP</td>
                <td>p. 7</td>
              </tr>
              <tr>
                <td>New, Bigger iPhone</td>
                <td>p. 9</td>
              </tr>
              <tr>
                <td>Microsoft Office 2013</td>
                <td>p. 2</td>
              </tr>
              <tr>
                <td>Encryption News</td>
                <td>p. 2</td>
              </tr>
            </table>
          </div>
        </main>
        <WebDevNavlist showNavProp={showNavProp} />
      </div>
    </div>
  );
}
