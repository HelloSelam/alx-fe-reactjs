import { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import { advancedUserSearch } from '../services/githubService';

function Search() {

    const [formData, setFormData] = useState({ username: '', location: '', minRepos: '' });
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSingleUserSearch = async () => {
      if (!formData.username) return;
      try {
        const userData = await fetchUserData(formData.username);
        setUsers([userData]);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUsers([]);

    try {
      const data = await advancedUserSearch(formData);
      setUsers(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md rounded p-6">
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="Username (optional)"
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="Location"
        />
        <input
          name="minRepos"
          value={formData.minRepos}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          type="number"
          placeholder="Minimum Repositories"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-600">Looks like we cant find the user</p>}

      <div className="mt-6 space-y-4">
        {users.map(user => (
          <div key={user.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded shadow-sm">
            <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;