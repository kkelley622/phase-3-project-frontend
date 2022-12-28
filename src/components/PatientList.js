import React from 'react'
import PatientCard from './PatientCard'

const PatientList = ( {patients} ) => {
const patientCards = patients.map(patient => <PatientCard key={patient.id} patient={patient}/>)

return (
    <div>{patientCards}</div>
  )
}

export default PatientList