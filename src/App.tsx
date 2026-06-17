import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  function switchTheme() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <div className="flex min-h-screen flex-col bg-tahini text-molasses dark:bg-molasses dark:text-tahini">
      <Header />
      <ThemeToggle isDarkMode={isDarkMode} onToggle={switchTheme} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
          <Route
            path="/weather/:latitude/:longitude"
            element={<WeatherPage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
