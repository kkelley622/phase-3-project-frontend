import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar-container'>
      <nav>
        <ul className='navbar-font'>
          <NavLink to="/" className='navbar-font'>Home</NavLink>
          <NavLink to="/nurses" className='navbar-font'>Nurses</NavLink>
          <NavLink to="/patients" className='navbar-font'>Patients</NavLink>  
        </ul>
      </nav>
    </div>
  )
}

export default Navbar