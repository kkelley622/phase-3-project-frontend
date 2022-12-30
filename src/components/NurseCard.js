import React from 'react'

const NurseCard = ( {nurse} ) => {
  const assignedRooms = nurse.patients.map(patient => patient.room_number)

  
  
  return (
    <div className="nurse-card">
      <div >
        <div className="card-body">
          <h className="card-title">{nurse.firstname} {nurse.lastname} ID: {nurse.id}</h>
          <p className="card-text">Phone Number: {nurse.phone_ext}</p>
          <p className="card-text">Shift: {nurse.shift}</p>
          <p className="card-text">Assigned: {assignedRooms.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}

export default NurseCard