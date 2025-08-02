import React, { useState } from 'react';
import Search from './components/Search';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
          GitHub User Search
        </h1>
        <Search setUsers={setUsers} />
        <p className="text-center text-gray-500 mb-6">
          Start typing to search for a GitHub user...
        </p>
      </div>
    </div>
  );
}

export default App;