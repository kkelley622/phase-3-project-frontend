import React from 'react';
import EditPatient from './EditPatient';

const PatientCard = ( {patient, onDeletePatient, onUpdatePatient} ) => {

  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/patients/${patient.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(patient => onDeletePatient(patient))
  }

  const handleUpdatePatient = (updatedPatient) => {
    onUpdatePatient(updatedPatient);
  }

 

  return (
    <div className='patient-card'>
      <div >
        <div className="card-body" >
          <h className="card-title">{patient.room_number} {patient.lastname}, {patient.firstname}</h>
          <p className="card-text">Diagnosis: {patient.diagnosis}</p>
          <p className="card-text">Nurse: {patient.nurse.firstname}</p>
          <div>Change Nurse ID: {<EditPatient patient={patient} handleUpdatePatient={handleUpdatePatient}/>}</div>
          <button onClick={handleDeleteClick}>DISCHARGE</button>
        </div>
      </div>
    </div>
  )
}

export default PatientCard