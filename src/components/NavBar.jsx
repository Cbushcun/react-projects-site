import { useRef } from "react";
import nameIcon from "/src/assets/personal-icon.png";
import { Link } from "react-router-dom";

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
      className="font-inconsolata fixed top-0 z-[100] flex w-screen flex-col font-bold text-stone-200 backdrop-blur-sm"
    >
      <div className="flex justify-between bg-stone-950 text-xl lg:bg-transparent">
        <a href="/" className="ml-2 flex gap-2 hover:cursor-pointer">
          <img src={nameIcon} alt="" className="my-auto h-9 rounded-full" />
          <p className="my-auto font-semibold">
            <span className="hidden sm:inline">Christian Bush</span> | Projects
          </p>
        </a>
        <ul className="hidden place-content-center gap-5 px-5 font-semibold lg:flex">
          <li className="flex">
            <Link
              to="https://www.businessbybush.com/"
              className="place-self-center transition duration-150 hover:cursor-pointer hover:text-green-400"
            >
              HOME
            </Link>
          </li>
        </ul>
        <a
          href="https://www.businessbybush.com/"
          className="px-3 py-2 lg:hidden"
        >
          <i className="fa-solid fa-house text-4xl transition duration-150 hover:text-green-400"></i>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
