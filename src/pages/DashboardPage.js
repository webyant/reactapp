// DashboardPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get('https://reqres.in/api/users');
          setUsers(response.data.data); // Assuming the data is nested under 'data'
          setIsLoading(false);
        } catch (err) {
          setError(err.message);
          setIsLoading(false);
        }
      };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.avatar} alt='' />
            {`${user.first_name} ${user.last_name}`}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;