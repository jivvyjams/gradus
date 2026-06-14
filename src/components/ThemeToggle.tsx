import { useState } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function switchTheme() {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="flex w-full justify-end p-8">
      <button
        className="h-12 w-12 cursor-pointer items-center rounded-full bg-molasses dark:bg-tahini"
        onClick={switchTheme}
      >
        {isDarkMode ? (
          <i className="bi bi-sun-fill text-xl text-tahini dark:text-molasses"></i>
        ) : (
          <i className="bi bi-moon-stars-fill text-xl text-tahini dark:text-molasses"></i>
        )}
      </button>
    </div>
  );
}
