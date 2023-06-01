import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Students from './components/Student';
import NewStudent from './components/NewStudent';
import CheckInKioskForm from './components/CheckInKioskForm';
import ShowVisitators from './components/ShowVisitators';


const API_URL = 'http://localhost:3000/api/v1/students';

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setStudents(items);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/index" element={<Students students={students} />}></Route>
          <Route path="/new" element={<NewStudent />}></Route>
          <Route path="/check-in-kiosk" element={<CheckInKioskForm />}></Route>
          <Route path="/visitators" element={<ShowVisitators />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
