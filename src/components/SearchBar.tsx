import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} className="flex place-content-center pb-4">
      <input
        type="text"
        className="peer h-16 w-full rounded-3xl rounded-e-none border-4 border-e-0 border-jasmine-dark bg-jasmine-light p-2 px-4 text-2xl inset-shadow-sm inset-shadow-jasmine-dark drop-shadow-xl/50 drop-shadow-jasmine-dark focus-visible:border-chicory focus-visible:outline-none md:max-w-1/2"
        placeholder="Please enter a city name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <button
        type="submit"
        className="inline-block w-fit cursor-pointer rounded-3xl rounded-s-none border-4 border-s-0 border-jasmine-dark bg-jasmine px-4 py-2 font-medium text-jasmine-dark inset-shadow-sm inset-shadow-jasmine-dark drop-shadow-xl/50 drop-shadow-jasmine-dark peer-focus-visible:border-chicory hover:brightness-90 md:min-w-3xs md:text-2xl"
      >
        Enter
      </button>
    </form>
  );
}
