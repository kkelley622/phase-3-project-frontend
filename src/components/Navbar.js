import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/nurses">Nurses</NavLink></li>
        <li><NavLink to="/patients">Patients</NavLink></li>  
      </ul>
    </nav>
  )
}

export default Navbar