import React, { useEffect, useState } from 'react';

export default function DailyQuote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h3 className="text-lg font-bold mb-2 dark:text-white">💡 Daily Motivation</h3>
      {quote ? (
        <blockquote className="italic text-gray-900 dark:text-gray-200">“{quote.content}” — {quote.author}</blockquote>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">“Success is not final; failure is not fatal: It is the courage to continue that counts.” —Winston Churchill
</p>
      )}
    </div>
  );
}
