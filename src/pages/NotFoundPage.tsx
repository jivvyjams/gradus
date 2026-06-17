import { Link } from "react-router";
import cloud from "../assets/404.png";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col px-4 text-center">
      <h2 className="text-6xl font-black text-chicory-dark">404</h2>
      <h3 className="text-4xl font-black text-chicory-dark">Page Not Found</h3>
      <img
        className="self-center"
        src={cloud}
        alt="sad blue cloud illustration"
        width={350}
      />
      <p className="pt-8 text-xl">
        Woah, looks like a storm knocked you off your course!
      </p>
      <p className="text-xl">
        Search for a location above or <Link to="/">click here</Link> to return
        to the home page.
      </p>
    </div>
  );
}
