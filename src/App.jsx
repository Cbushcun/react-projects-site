import ProjectLanding from "./Pages/ProjectLanding/ProjectLanding";
import LinkShortenerApp from "./Projects/LinkShortener/LinkShortenerApp";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<ProjectLanding />} />
          <Route path="/link-shortener" element={<LinkShortenerApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
