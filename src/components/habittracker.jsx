import React, { useState } from 'react';

export default function HabitTracker() {
  const habits = ['Drink Water', 'Exercise', 'Read Book','Practice your skill','Limit timescreen','Spend time with family/friends','Eat healthy'];
  const [marked, setMarked] = useState({});

  const markHabit = (habit) => {
    setMarked({ ...marked, [habit]: !marked[habit] });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h3 className="text-lg font-bold mb-2 dark:text-white">💪 Habit Tracker</h3>
      <ul className="space-y-2">
        {habits.map((habit) => (
          <li key={habit} className="flex justify-between items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white">
            {habit}
            <button
              onClick={() => markHabit(habit)}
              className={`px-3 py-1 rounded-md text-white text-sm ${
                marked[habit] ? 'bg-green-600' : 'bg-gray-500'
              }`}
            >
              {marked[habit] ? 'Done' : 'Mark'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
