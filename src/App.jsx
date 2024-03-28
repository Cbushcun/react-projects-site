import ProjectLanding from "./Pages/ProjectLanding/ProjectLanding";
import LinkShortenerApp from "./Projects/LinkShortener/LinkShortenerApp";
import MusicPlayerApp from "./Projects/MusicPlayer/MusicPlayerApp";
import MusicPlayerHome from "./Projects/MusicPlayer/pages/MusicPlayerHome";
import NotFound from "./Pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Home */}
          <Route path="/" element={<ProjectLanding />} />
          {/* Link Shortener */}
          <Route path="/link-shortener" element={<LinkShortenerApp />} />
          {/* music player routes*/}
          <Route path="/music-player" element={<MusicPlayerApp />} />
          <Route path="/music-player/home" element={<MusicPlayerHome />} />
          {/* Error routing */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
