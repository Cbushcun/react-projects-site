import { Link } from "react-router-dom";
import "../stylesheets/WebDevIndex.css";

export default function WebDevNavlist({ showNavProp }) {
  return (
    <>
      <aside id="nav-list" className={`${showNavProp ? "" : "translate-full"}`}>
        <ul className="nav-list">
          <li className="list-item">
            <Link to="/introtowebdev">Home</Link>
          </li>
          <li className="list-header list-item">
            Lab 1
            <ul>
              <li className="list-item">
                <Link to="/introtowebdev/lab1p4">Part 4</Link>
              </li>
            </ul>
          </li>
          <li className="list-header list-item">
            Lab 2
            <ul>
              <li className="list-item">
                <Link to="/introtowebdev/lab2p1">Part 1</Link>
              </li>
              <li className="list-item">
                <Link to="/introtowebdev/lab2p2">Part 2</Link>
              </li>
            </ul>
          </li>
          <li className="list-header list-item">
            Lab 3
            <ul>
              <li className="list-item">
                <Link to="/introtowebdev/lab3p1">Part 1</Link>
              </li>
              <li className="list-item">
                <Link to="/introtowebdev/lab3p2">Part 2</Link>
              </li>
              <li className="list-item">
                <Link to="/introtowebdev/lab3p3">Part 3</Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}
