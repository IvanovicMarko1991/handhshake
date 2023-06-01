import React, { useState, useEffect } from 'react'
import axios from 'axios';

function CheckInKioskForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [majorOptions, setMajorOptions] = useState([]);
  const [selectedMajor, setSelectedMajor] = useState('');
  const [selectVisitator, setselectVisitator] = useState('');

  useEffect(() => {
    axios.get('https://ios-interview.joinhandshake-internal.com/majors')
      .then(response => {
        const majors = response.data.majors.map(major => ({
          value: major.id,
          label: major.name
        }));
        setMajorOptions(majors);
      })
      .catch(error => {
        console.log('Error fetching majors:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      first_name: firstName,
      last_name: lastName,
      email,
      major: selectedMajor,
      visitator: selectVisitator
    }

    // if formData.visitator == true
    //   axios.put

    // else
    //   axios.post

    axios.post('http://localhost:3000/api/v1/visitators', formData)
      .then(response => {
        console.log('Form submitted successfully!');
      })
      .catch(error => {
        console.log('Form submission error:', error);
      });
  }



  return (
    <div>
      <h1>Visitor Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="major">Major</label>
          <select
            id="major"
            value={selectedMajor}
            onChange={(e) => setSelectedMajor(e.target.value)}
          >
            <option value="">Select a major</option>
            {majorOptions.map(major => (
              <option key={major.value} value={major.value}>{major.label}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>
            <input type="checkbox"
              value={selectVisitator}
              onChange={(e) => setselectVisitator(e.target.value)}
            ></input>
            Existing Visitator
          </label>

        </div>
        <div className="actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CheckInKioskForm