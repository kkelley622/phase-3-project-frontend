import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
          <NavLink to="/" className='a'>Home</NavLink>
          <NavLink to="/patients" className='a'>Patients</NavLink>  
          <NavLink to="/nurses" className='a'>Nurses</NavLink>
      </nav>
    </div>
  )
}

export default Navbar