import MusicBackground from "../components/MusicBackground";

export default function MusicPlayerHome() {
  return (
    <section className="h-screen w-screen text-stone-200">
      <MusicBackground />
      <div className="flex h-full w-full flex-col backdrop-blur-md backdrop-filter">
        <div className="flex flex-grow">
          <div className="w-1/6 max-w-16 bg-stone-950"> sidebar content</div>
        </div>
        <div className="h-16 w-full bg-stone-900/90 backdrop-blur-xl backdrop-filter">
          player content
        </div>
      </div>
    </section>
  );
}
