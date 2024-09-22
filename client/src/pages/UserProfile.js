import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = ({ match }) => {
  const [user, setUser] = useState(null);
  const [readingHistory, setReadingHistory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const userId = match.params.id;
      const userResponse = await axios.get(`/api/users/${userId}`);
      setUser(userResponse.data);
      const historyResponse = await axios.get(`/api/users/${userId}/reading-history`);
      setReadingHistory(historyResponse.data);
    }
    fetchData();
  }, [match.params.id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-profile">
      <h1>{user.full_name}</h1>
      <img src={user.profile_picture} alt="Profile" />
      <h2>Reading History</h2>
      <ul>
        {readingHistory.map((entry) => (
          <li key={entry.id}>{entry.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
