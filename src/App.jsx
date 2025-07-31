import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import HabitTracker from "./components/HabitTracker";
import DailyQuote from "./components/DailyQuote";
import WeatherWidget from "./components/WeatherWidget";
import Notes from "./components/Notes";
import FriendResponses from './components/FriendResponses';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">🌟 Productivity Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="grid gap-6">
          <TodoList />
          <HabitTracker />
          <DailyQuote />
          <WeatherWidget />
          {/* Add Notes component */}
          <Notes />
          <FriendResponses />
        </div>
      </div>
    </div>
  );
}

export default App;
