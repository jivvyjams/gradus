import SearchBar from "../components/SearchBar";
import sun from "../assets/sun.png";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col p-4 text-center">
      <img
        src={sun}
        className="self-center"
        alt="smiling sun peeking over the search bar"
        width={1000}
      />
      <SearchBar />
    </div>
  );
}
