import ProjectLanding from "./Pages/ProjectLanding/ProjectLanding";
import LinkShortenerApp from "./Projects/LinkShortener/LinkShortenerApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProjectLanding />} />
          <Route path="/link-shortener" element={<LinkShortenerApp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
