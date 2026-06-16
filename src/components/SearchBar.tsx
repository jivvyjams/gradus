import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const MIN_QUERY_LENGTH = 3;

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    const trimmed = query.trim();

    if (trimmed.length < MIN_QUERY_LENGTH) {
      setIsError(true);
      return;
    }

    setIsError(false);
    onSearch(trimmed);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center pb-4">
      <div className="flex w-full place-content-center">
        <input
          type="text"
          className="peer h-16 w-full rounded-3xl rounded-e-none border-4 border-e-0 border-jasmine-dark bg-jasmine-light p-2 px-4 text-2xl inset-shadow-sm inset-shadow-jasmine-dark drop-shadow-xl/50 drop-shadow-jasmine-dark focus-visible:border-chicory focus-visible:outline-none md:max-w-1/2"
          placeholder="Please enter a city name..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsError(false);
          }}
        />
        <button
          type="submit"
          className="inline-block w-fit cursor-pointer rounded-3xl rounded-s-none border-4 border-s-0 border-jasmine-dark bg-jasmine px-4 py-2 font-medium text-jasmine-dark inset-shadow-sm inset-shadow-jasmine-dark drop-shadow-xl/50 drop-shadow-jasmine-dark peer-focus-visible:border-chicory hover:brightness-90 md:min-w-3xs md:text-2xl"
        >
          Enter
        </button>
      </div>

      {isError && (
        <p className="pt-2 font-semibold text-berry-dark dark:text-berry">
          Search must be at least {MIN_QUERY_LENGTH} characters long.
        </p>
      )}
    </form>
  );
}
