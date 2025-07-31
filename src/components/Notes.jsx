import React, { useState, useEffect } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim() !== "") {
      setNotes([...notes, input.trim()]);
      setInput("");
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">📝 Notes</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your note here..."
        />
        <button
          onClick={addNote}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {notes.map((note, index) => (
          <li
            key={index}
            className="bg-gray-100 dark:bg-gray-700 p-3 rounded flex justify-between items-center"
          >
            <span className="text-gray-900 dark:text-gray-100">{note}</span>
            <button
              onClick={() => deleteNote(index)}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
        {notes.length === 0 && (
          <li className="text-gray-500 dark:text-gray-400 italic">No notes yet...</li>
        )}
      </ul>
    </div>
  );
}