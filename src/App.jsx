import ProjectLanding from "./Pages/ProjectLanding/ProjectLanding"; // project table homepage (https://www.projects.businessbybush.com)
import LinkShortenerApp from "./Projects/LinkShortener/LinkShortenerApp"; // URL Shortener project
{
  /* import WeatherApp from "./Projects/WeatherApp/WeatherApp"; */
} // Weather App project
import NotFound from "./Pages/NotFound"; // 404

/* Intro to web develoment project pages */
import WebDevIndex from "./Projects/WebDevProject/pages/WebDevIndex";
import LabIPIIII from "./Projects/WebDevProject/pages/LabIPIIII";
import LabIIPI from "./Projects/WebDevProject/pages/LabIIPI";
import LabIIPII from "./Projects/WebDevProject/pages/LabIIPII";
import LabIIIPI from "./Projects/WebDevProject/pages/LabIIIPI";
import LabIIIPII from "./Projects/WebDevProject/pages/LabIIIPII";
import LabIIIPIII from "./Projects/WebDevProject/pages/LabIIIPIII";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Multi-route pages are not included in this App.jsx and are instead located within their respective ProjectNameApp.jsx files due to maintaing proper scope. Undisplayed endpoints and their state, functions, and locations are as follows:

// /introtowebdev located in /Projects/WebDevProject

// TODO: Add rest of web dev project. Look over Lab1P4 and implement rest
function App() {
  // /introtowebdev state management
  const [showNav, setshowNav] = useState(false);

  function onNavClick() {
    setshowNav(!showNav);
  } // end /introtowebdev

  return (
    <>
      <Router>
        <Routes>
          {/* Home */}
          <Route path="/" element={<ProjectLanding />} />
          {/* Intro to Web Dev Project */}
          <Route
            path="/introtowebdev"
            element={
              <WebDevIndex showNavProp={showNav} onNavClickProp={onNavClick} />
            }
          />
          <Route
            path="/introtowebdev/lab1p4"
            element={
              <LabIPIIII showNavProp={showNav} onNavClickProp={onNavClick} />
            }
          />
          <Route
            path="/introtowebdev/lab2p1"
            element={
              <LabIIPI showNavProp={showNav} onNavClickProp={onNavClick} />
            }
          />
          <Route
            path="/introtowebdev/lab2p2"
            element={
              <LabIIPII showNavProp={showNav} onNavClickProp={onNavClick} />
            }
          />
          <Route
            path="/introtowebdev/lab3p1"
            element={
              <LabIIIPI showNavProp={showNav} onNavClickProp={onNavClick} />
            }
          />
          <Route
            path="/introtowebdev/lab3p2"
            element={
              <LabIIIPII showNavProp={showNav} onNavClickProp={onNavClick} />
            }
          />
          <Route
            path="/introtowebdev/lab3p3"
            element={
              <LabIIIPIII showNavProp={showNav} onNavClickProp={onNavClick} />
            }
          />
          {/* Link Shortener */}
          <Route path="/link-shortener" element={<LinkShortenerApp />} />
          {/* WeatherApp routes
          <Route path="/weather" element={<WeatherApp />} />*/}
          {/* Error routing */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
