import React, { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h3 className="text-lg font-bold mb-2 dark:text-white">📌 To-Do List</h3>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task"
          className="flex-grow px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white outline-none"
        />
        <button onClick={addTask} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white">
            {task}
            <button onClick={() => removeTask(index)} className="text-red-500 hover:text-red-700">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}