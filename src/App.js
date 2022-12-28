import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NurseList from './components/NurseList'
import PatientList from './components/PatientList'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewPatient from './components/NewPatient';



const App = () => {
  const [nurses, setNurses] = useState([])
  const [patients, setPatients] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:9292/nurses")
    .then(response => response.json())
    .then(data => setNurses(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/patients")
    .then(response => response.json())
    .then(data => setPatients(data))
  }, [])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path= "/">
          <Home />
        </Route>
        <Route exact path= "/nurses">
          <NurseList nurses={nurses}/>
        </Route>
        <Route exact path= "/patients">
          <PatientList patients={patients}/>
        </Route>
        <Route exact path= "/new_patient">
          <NewPatient patients={patients}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App