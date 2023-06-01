import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowVisitators() {
  const [visitators, setVisitators] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/visitators')
      .then(response => {
        setVisitators(response.data);
      })
      .catch(error => {
        console.log('Error fetching visitators:', error);
      });
  }, []);

  return (
    <div>
      <h1>Visitators List</h1>

      {visitators.map(visitator => (
        <div key={visitator.id}>
          <p>First Name: {visitator.first_name}</p>
          <p>Last Name: {visitator.last_name}</p>
          <p>Email: {visitator.email}</p>
          <p>Major: {visitator.major}</p>
          <p>Check-in: {visitator.check_in}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ShowVisitators;
