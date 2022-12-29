import React from 'react'

const PatientCard = ( {patient, onDeletePatient} ) => {

  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/patients/${patient.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(patient => onDeletePatient(patient))
  }

 

  return (
    <div>
      <div className="card">
        <div className="card-body" >
          <h5 className="card-title">{patient.lastname}, {patient.firstname}</h5>
          <p className="card-text">Room Number: {patient.room_number}</p>
          <p className="card-text">Diagnosis: {patient.diagnosis}</p>
          <p className="card-text">Nurse: {patient.nurse.firstname}</p>
          <button onClick={handleDeleteClick}>DISCHARGE</button>
        </div>
      </div>
    </div>
  )
}

export default PatientCard