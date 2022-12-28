import React from 'react'

const PatientCard = ( {patient} ) => {
  return (
    <div>
      <div className="card">
        <div className="card-body" >
          <h5 className="card-title">{patient.lastname}, {patient.firstname}</h5>
          <p className="card-text">Room Number: {patient.room_number}</p>
          <p className="card-text">Diagnosis: {patient.diagnosis}</p>
          <p className="card-text">Nurse: {patient.nurse.firstname}</p>
          <button>DISCHARGE</button>
        </div>
      </div>
    </div>
  )
}

export default PatientCard