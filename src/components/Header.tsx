export default function Header() {
  return (
    <header className="flex flex-col justify-between rounded-b-2xl bg-jasmine p-6 text-molasses shadow-xl/25 inset-shadow-sm/75 shadow-molasses inset-shadow-jasmine-dark md:flex-row dark:bg-jasmine-dark dark:text-tahini dark:shadow-xl/10 dark:shadow-jasmine dark:inset-shadow-molasses">
      <div className="flex gap-6">
        <img
          className="h-24 w-24 rounded-full bg-tahini dark:bg-molasses"
          src="src/assets/logo.svg"
        />
        <div className="flex flex-col justify-center">
          <h1>Gradus</h1>
          <p>Open-source weather app</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 pt-6 md:pt-0">
        <h2>
          <a href="#">About</a>
        </h2>
        <h2>
          <a href="#">Contact</a>
        </h2>
        <a href="https://github.com/jivvyjams#" target="_blank">
          <button className="inline-block cursor-pointer rounded-2xl bg-chicory px-4 py-2 text-xl font-semibold dark:bg-chicory-dark dark:text-tahini">
            <i className="bi bi-git pr-3"></i>GitHub
          </button>
        </a>
      </div>
    </header>
  );
}
