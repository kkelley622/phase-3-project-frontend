import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import NurseList from './NurseList'
import PatientList from './PatientList'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const App = () => {
  
  return (
    <div className='App'>
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
    </div>
  )
}

export default App