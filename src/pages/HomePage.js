// HomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get('https://reqres.in/api/users/');
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
      <h1>Homepage</h1>
      <h2>Jayanti</h2>
    </div>
  );
};

export default HomePage;