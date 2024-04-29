import React, { lazy, Suspense } from "react";

const BackgroundAnimation = lazy(
  () => import("./components/BackgroundAnimation/BackgroundAnimation"),
);
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const LinkShortener = lazy(
  () => import("./components/LinkShortener/LinkShortener"),
);

/**
 * Renders the Link Shortener application.
 *
 * @returns {JSX.Element} The rendered Link Shortener application.
 */
export default function LinkShortenerApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BackgroundAnimation />
      <Navbar />
      <LinkShortener />
    </Suspense>
  );
}
