// src/components/FriendResponses.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, push, onValue } from "firebase/database";

const FriendResponses = () => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const [responses, setResponses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && response) {
      const responsesRef = ref(db, "responses");
      push(responsesRef, {
        name,
        response,
        timestamp: Date.now(),
      })
        .then(() => {
          setName("");
          setResponse("");
          alert("Response submitted successfully!");
        })
        .catch((error) => {
          console.error("Error submitting response:", error);
        });
    }
  };

  useEffect(() => {
    const responsesRef = ref(db, "responses");
    onValue(responsesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedResponses = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setResponses(loadedResponses.reverse()); // show latest first
      } else {
        setResponses([]);
      }
    });
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Submit Friend Response</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          type="text"
          placeholder="Friend's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          placeholder="Their Response"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">All Responses</h3>
        {responses.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No responses yet.</p>
        ) : (
          <ul className="space-y-2">
            {responses.map((res) => (
              <li
                key={res.id}
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded"
              >
                <p className="text-sm text-gray-700 dark:text-white font-medium">{res.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{res.response}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FriendResponses;
