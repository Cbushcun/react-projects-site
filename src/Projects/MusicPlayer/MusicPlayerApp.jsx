import MusicBackground from "./components/MusicBackground";

export default function MusicPlayerApp() {
  return (
    <section className="font-inconsolata h-screen w-screen bg-stone-800">
      <MusicBackground />
      <div className="absolute flex h-full w-full backdrop-blur-md backdrop-filter">
        <a
          href="/login"
          className="m-auto rounded-xl bg-green-500 p-3 text-3xl font-bold text-stone-900 shadow-inner shadow-stone-100/45 transition duration-150 hover:scale-105 hover:cursor-pointer hover:bg-green-600"
        >
          Login with Spotify
        </a>
      </div>
    </section>
  );
}
