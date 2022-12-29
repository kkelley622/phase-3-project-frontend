import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NurseList from './components/NurseList'
import PatientList from './components/PatientList'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewPatient from './components/NewPatient';



const App = () => {
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path= "/">
          <Home />
        </Route>
        <Route exact path= "/nurses">
          <NurseList />
        </Route>
        <Route exact path= "/patients">
          <PatientList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App