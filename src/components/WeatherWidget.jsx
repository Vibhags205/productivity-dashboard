import React, { useState } from 'react';

const API_KEY = '4c284eb667bc05e09cf19f2d8d5d6922'; // Replace with your real API key

export default function WeatherWidget() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) return;

    try {
      setError('');
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-2">🌧️ Weather Widget</h3>
      <div className="flex mb-2 gap-2">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-3 py-2 rounded-md border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={fetchWeather}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Get Weather
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {weather && (
        <div className="mt-4">
          <p className="font-medium text-lg">{weather.name}, {weather.sys.country}</p>
          <p>{weather.weather[0].description}</p>
          <p className="text-2xl font-bold">{weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}