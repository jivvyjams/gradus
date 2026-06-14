import { Link } from "react-router";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex flex-col justify-between rounded-b-2xl bg-jasmine p-6 text-molasses shadow-xl/25 inset-shadow-sm/75 shadow-molasses inset-shadow-jasmine-dark md:flex-row dark:bg-jasmine-dark dark:text-tahini dark:shadow-xl/10 dark:shadow-jasmine dark:inset-shadow-molasses">
      <div className="flex gap-6">
        <Link to="/">
          <img
            className="h-24 w-24 rounded-full bg-tahini dark:bg-molasses"
            src={logo}
            alt="illustrated cloud with three lines in decreasing width trailing below it"
          />
        </Link>
        <div className="flex flex-col justify-center">
          <h1>
            <Link to="/">Gradus</Link>
          </h1>
          <p>Open-source weather app</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 pt-6 md:pt-0">
        <Link className="text-2xl font-medium" to="/about">
          About
        </Link>
        <Link className="text-2xl font-medium" to="/contact">
          Contact
        </Link>
        <a href="https://github.com/jivvyjams#" target="_blank">
          <button className="inline-block cursor-pointer rounded-2xl bg-chicory px-4 py-2 text-xl font-semibold hover:brightness-90 dark:bg-chicory-dark dark:text-tahini dark:hover:brightness-110">
            <i className="bi bi-github pr-3"></i>GitHub
          </button>
        </a>
      </div>
    </header>
  );
}
