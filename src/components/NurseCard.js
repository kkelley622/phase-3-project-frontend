import React from 'react'

const NurseCard = ( {nurse} ) => {
  const assignedRooms = nurse.patients.map(patient => patient.room_number)
  
  return (
    <div>
      <div className="card">
        <div className="card-body" >
          <h5 className="card-title">{nurse.firstname} {nurse.lastname} ID: {nurse.id}</h5>
          <p className="card-text">Phone Number: {nurse.phone_ext}</p>
          <p className="card-text">Shift: {nurse.shift}</p>
          <p className="card-text">Assigned: {assignedRooms.join(', ')}</p>
          <button>CLOCK OUT</button>
        </div>
      </div>
    </div>
  )
}

export default NurseCard