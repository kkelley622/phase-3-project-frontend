import React, {useState, useEffect} from 'react'
import PatientCard from './PatientCard'
import NewPatient from './NewPatient'

const PatientList = ( ) => {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/patients")
    .then(response => response.json())
    .then(data => setPatients(data))
  }, [])

  const handlePatientSubmit = (e, patientObj) => {
    e.preventDefault()
    fetch("http://localhost:9292/patients", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(patientObj)
    })
    .then(res => res.json())
    .then(data => setPatients([data, ...patients]))
  }

  const onDeletePatient = (deletedPatient) => {
    const updatedPatients = patients.filter((patient) => patient.id !== deletedPatient.id);
    setPatients(updatedPatients);
  }

  const onUpdatePatient = (updatedPatientObj) => {
    const updatedPatients = patients.map(patient => {
      if (patient.id === updatedPatientObj.id) {
        return updatedPatientObj
      } else {
        return patient
      }
    });
    setPatients(updatedPatients)
  }

  const patientCards = patients.sort(((a,b) => a.room_number > b.room_number ? 1 : -1 )).map(patient => <PatientCard key={patient.id} patient={patient} onDeletePatient={onDeletePatient} onUpdatePatient={onUpdatePatient}/>)

  return (
    <div>
      <NewPatient handleSubmit={handlePatientSubmit}/>
      <br/>
      <div>{patientCards}</div>
     </div>
    )
  }

export default PatientList