import React, { useEffect, useState } from 'react';
import ListView from './component/ListView.jsx';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const jsonData = await response.json();
      setData(jsonData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={styleContainer}>
        <h1 style={{fontFamily: 'Allcan DEMO'}}>MY WEBAPP</h1>
        <input
          type="text"
          placeholder="Search by First Name"
          style={inputStyle}
          value={searchTerm}
          onChange={handleSearch}
          />
        </div>
      {filteredData.length > 0 ? (
        <ListView data={filteredData} />
      ) : (
        <p style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          }}>
          No results found.
          </p>
      )}
    </div>
  );
};

const styleContainer ={
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
};

const inputStyle = {
  width: '200px',
  height: '30px',
  padding: '5px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

export default App;
