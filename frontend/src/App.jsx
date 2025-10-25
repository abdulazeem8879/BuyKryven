// App.jsx
import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Tailwind CSS is Working!
      </h1>
      <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
        Click Me
      </button>
      <p className="mt-4 text-gray-700">
        If you see styled heading, button, and background, Tailwind is working.
      </p>
    </div>
  );
}

export default App;