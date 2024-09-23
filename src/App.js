import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3030/users')
      .then(res => {
        if (res.data.length > 0) {
          setColumns(Object.keys(res.data[0]));
          setRecords(res.data);
        }
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, []);

  const handleDelete = (id) => {
    const conf = window.confirm("Do you want to delete?");
    if (conf) {
      axios.delete(`http://localhost:3030/users/${id}`)
        .then(res => {
          alert('Client has been deleted');
          setRecords(records.filter(record => record.id !== id));
        })
        .catch(err => console.log(err));
    }
  };

  // Function to sort by date in ascending order
  const sortByDateAsc = () => {
    const sortedRecords = [...records].sort((a, b) => new Date(a.paiment) - new Date(b.paiment));
    setRecords(sortedRecords);
    setIsAscending(true);
  };

  // Function to sort by date in descending order
  const sortByDateDesc = () => {
    const sortedRecords = [...records].sort((a, b) => new Date(b.paiment) - new Date(a.paiment));
    setRecords(sortedRecords);
    setIsAscending(false);
  };

  return (
    <div className='container mt-5'>
      <div className='text-end'>
        <Link to="/create" className='btn btn-primary mb-3'>Add +</Link>
      </div>
      
      {/* Sorting Buttons */}
      <div className='mb-3'>
        <button onClick={sortByDateAsc} className='btn btn-outline-primary me-20'>
          Sort by Date Ascending ⬆️
        </button>
        <button onClick={sortByDateDesc} className='btn btn-outline-primary'>
          Sort by Date Descending ⬇️
        </button>
      </div>

      <table className='table'>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, i) => (
            <tr key={i}>
              {columns.map((column, index) => (
                <td key={index}>{record[column]}</td>
              ))}
              <td>
                <Link to={`/update/${record.id}`} className='btn btn-success me-2'>Update</Link>
                <button onClick={() => handleDelete(record.id)} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
