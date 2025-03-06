import { useState } from "react";

export default function SearchBar({ setter }) {
  const [search, setSearch] = useState("");

  const handleField = (value) => {
    setSearch(value);
    setter(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-80">
      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-300 rounded-md overflow-hidden shadow-sm focus-within:border-stone-700 cursor-pointer"
      >
        <input
          name="search"
          type="text"
          placeholder="Cerca partecipanti..."
          value={search}
          onChange={(e) => handleField(e.target.value)}
          className="flex-grow px-3 py-2 outline-none"
        />
        <button
          type="submit"
          className="px-3 py-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
