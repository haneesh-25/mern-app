import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://haneesh.online:3001/api/data');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <h1>JSON Data from Node.js API</h1>
      <ul>
        <li>{data.name}</li>
        <li>{data.about}</li>
        <li>{data.education.colleage}<ul><li>{data.education.duration}</li></ul></li>
      </ul>
    </div>
  );
}

export default App;
