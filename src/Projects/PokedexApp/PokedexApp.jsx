import { useState } from "react";
import Search from "./components/Search";

export default function PokedexApp() {
  const [pokemon, setPokemon] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  return (
    <section className="h-screen w-screen bg-stone-200">
      <div className="container flex h-full flex-col gap-4 py-4">
        <Search />
        <div className="flex flex-col gap-3">
          <div className="flex h-16 overflow-hidden rounded-md bg-white shadow-xl">
            <div className="h-full w-3 bg-red-400"></div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="a png sprite of the selected pokemon"
              className="scale-150"
            />
            <span className="my-auto text-2xl">Ditto</span>
          </div>
          <div className="flex h-16 overflow-hidden rounded-md bg-white shadow-xl">
            <div className="h-full w-3 bg-red-400"></div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="a png sprite of the selected pokemon"
              className="scale-150"
            />
            <span className="my-auto text-2xl">Ditto</span>
          </div>
          <div className="flex h-16 overflow-hidden rounded-md bg-white shadow-xl">
            <div className="h-full w-3 bg-red-400"></div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="a png sprite of the selected pokemon"
              className="scale-150"
            />
            <span className="my-auto text-2xl">Ditto</span>
          </div>
          <div className="flex h-16 overflow-hidden rounded-md bg-white shadow-xl">
            <div className="h-full w-3 bg-red-400"></div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="a png sprite of the selected pokemon"
              className="scale-150"
            />
            <span className="my-auto text-2xl">Ditto</span>
          </div>
          <div className="flex h-16 overflow-hidden rounded-md bg-white shadow-xl">
            <div className="h-full w-3 bg-red-400"></div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="a png sprite of the selected pokemon"
              className="scale-150"
            />
            <span className="my-auto text-2xl">Ditto</span>
          </div>
          <div className="flex h-16 overflow-hidden rounded-md bg-white shadow-xl">
            <div className="h-full w-3 bg-red-400"></div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="a png sprite of the selected pokemon"
              className="scale-150"
            />
            <span className="my-auto text-2xl">Ditto</span>
          </div>
          <div className="flex h-16 overflow-hidden rounded-md bg-white shadow-xl">
            <div className="h-full w-3 bg-red-400"></div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="a png sprite of the selected pokemon"
              className="scale-150"
            />
            <span className="my-auto text-2xl">Ditto</span>
          </div>
          <div className="flex h-16 overflow-hidden rounded-md bg-white shadow-xl">
            <div className="h-full w-3 bg-red-400"></div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="a png sprite of the selected pokemon"
              className="scale-150"
            />
            <span className="my-auto text-2xl">Ditto</span>
          </div>
          <div className="flex h-16 overflow-hidden rounded-md bg-white shadow-xl">
            <div className="h-full w-3 bg-red-400"></div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="a png sprite of the selected pokemon"
              className="scale-150"
            />
            <span className="my-auto text-2xl">Ditto</span>
          </div>
          <div className="flex h-16 overflow-hidden rounded-md bg-white shadow-xl">
            <div className="h-full w-3 bg-red-400"></div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="a png sprite of the selected pokemon"
              className="scale-150"
            />
            <span className="my-auto text-2xl">Ditto</span>
          </div>
          <div className="flex h-16 overflow-hidden rounded-md bg-white shadow-xl">
            <div className="h-full w-3 bg-red-400"></div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="a png sprite of the selected pokemon"
              className="scale-150"
            />
            <span className="my-auto text-2xl">Ditto</span>
          </div>
          <div className="flex h-16 overflow-hidden rounded-md bg-white shadow-xl">
            <div className="h-full w-3 bg-red-400"></div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="a png sprite of the selected pokemon"
              className="scale-150"
            />
            <span className="my-auto text-2xl">Ditto</span>
          </div>
          <div className="flex h-16 overflow-hidden rounded-md bg-white shadow-xl">
            <div className="h-full w-3 bg-red-400"></div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="a png sprite of the selected pokemon"
              className="scale-150"
            />
            <span className="my-auto text-2xl">Ditto</span>
          </div>
        </div>
        <ul className="mx-auto mb-1 mt-auto flex max-h-fit w-44 justify-center gap-2 text-center text-2xl font-bold">
          <li className="flex-grow rounded-full bg-white shadow-md">&lt; </li>
          <li className="flex-grow rounded-full bg-white shadow-md">1</li>
          <li className="flex-grow rounded-full bg-white shadow-md">2</li>
          <li className="flex-grow rounded-full bg-white shadow-md">3</li>
          <li className="flex-grow rounded-full bg-white shadow-md"> &gt;</li>
        </ul>
      </div>
    </section>
  );
}
