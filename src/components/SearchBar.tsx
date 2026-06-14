export default function SearchBar() {
  return (
    <form className="flex place-content-center pb-4">
      <input
        type="text"
        className="peer h-16 w-full rounded-3xl rounded-e-none border-4 border-e-0 border-jasmine-dark bg-jasmine-light p-2 px-4 text-2xl inset-shadow-sm inset-shadow-jasmine-dark drop-shadow-xl/50 drop-shadow-jasmine-dark focus-visible:border-chicory focus-visible:outline-none md:max-w-1/2"
        placeholder="Please enter a city name..."
      ></input>
      <input
        type="submit"
        className="inline-block w-fit cursor-pointer rounded-3xl rounded-s-none border-4 border-s-0 border-jasmine-dark bg-jasmine px-4 py-2 font-medium text-jasmine-dark inset-shadow-sm inset-shadow-jasmine-dark drop-shadow-xl/50 drop-shadow-jasmine-dark peer-focus-visible:border-chicory hover:brightness-90 md:min-w-3xs md:text-2xl"
        value="Enter"
      ></input>
    </form>
  );
}
