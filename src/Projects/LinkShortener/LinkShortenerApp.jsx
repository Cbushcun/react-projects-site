import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import Navbar from "./components/Navbar/Navbar";
import LinkShortener from "./components/LinkShortener/LinkShortener";

export default function LinkShortenerApp() {
  return (
    <>
      <BackgroundAnimation />
      <Navbar />
      <LinkShortener />
    </>
  );
}
