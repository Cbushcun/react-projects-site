export default function Search() {
  return (
    <div className="w-full overflow-hidden rounded-full shadow-md">
      <input
        type="text"
        placeholder="e.g. Pikachu"
        className="w-5/6 px-3 py-2"
      />
      <button className="h-full w-1/6 bg-red-400">Search</button>
    </div>
  );
}
