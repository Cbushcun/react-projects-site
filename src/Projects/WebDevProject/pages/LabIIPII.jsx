import "../stylesheets/WebDevIndex.css";
import WebDevNavlist from "../components/WebDevNavlist";
import WebDevNavbar from "../components/WebDevNavbar";

import "../stylesheets/LabIIPII.css";

export default function LabIIPII({ showNavProp, onNavClickProp }) {
  return (
    <div className="web-dev-body">
      <div className="ball-one"></div>
      <div className="ball-two"></div>
      <div className="backdrop-blur"></div>
      <WebDevNavbar
        showNavProp={showNavProp}
        onNavClickProp={onNavClickProp}
        tabTitleText="Lab 2 Pt 2 IT 3203"
      />
      <div className="container">
        <main>
          <div className="content inconsolata">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Price</th>
                  <th>Shipping Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Chisel</th>
                  <td>$16.99</td>
                  <td>1.25 pounds</td>
                </tr>
                <tr>
                  <th>Hoe</th>
                  <td>$19.99</td>
                  <td>2.55 pounds</td>
                </tr>
                <tr>
                  <th>Saw</th>
                  <td>$15.99</td>
                  <td>1.08 pounds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
        <WebDevNavlist showNavProp={showNavProp} />
      </div>
    </div>
  );
}
