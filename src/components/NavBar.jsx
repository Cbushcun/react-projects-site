import { useRef } from "react";
import nameIcon from "/src/assets/personal-icon.png";

function NavBar() {
  const navListRef = useRef(null);

  function toggleNav() {
    if (navListRef.current) {
      navListRef.current.classList.toggle("-translate-y-full");
    }
  }

  return (
    <nav
      id="navBar"
      className="fixed top-0 z-[100] flex w-screen flex-col font-bold text-stone-200 backdrop-blur-sm"
    >
      <div className="flex justify-between bg-stone-950 text-xl lg:bg-transparent font-inconsolata">
        <a
          href="https://www.businessbybush.com"
          className="ml-2 flex gap-2 hover:cursor-pointer"
        >
          <img src={nameIcon} alt="" className="my-auto h-9 rounded-full" />
          <p className="my-auto font-semibold">Christian Bush</p>
        </a>
        <ul className="hidden place-content-center gap-5 px-5 lg:flex"></ul>
        <button className="px-5 py-2 lg:hidden" onClick={toggleNav}>
          <i className="fa-solid fa-bars text-4xl"></i>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
