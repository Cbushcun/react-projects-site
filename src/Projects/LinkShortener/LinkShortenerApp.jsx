// Import the BackgroundAnimation component
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";

import Navbar from "./components/Navbar/Navbar";
import LinkShortener from "./components/LinkShortener/LinkShortener";

/**
 * Renders the Link Shortener application.
 *
 * @returns {JSX.Element} The rendered Link Shortener application.
 */
export default function LinkShortenerApp() {
  return (
    <>
      <BackgroundAnimation />
      <Navbar />
      <LinkShortener />
    </>
  );
}
