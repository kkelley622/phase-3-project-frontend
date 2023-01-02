import React, { useState } from 'react'

const EditPatient = ( {patient, handleUpdatePatient} ) => {
    const [nurseId, setNurseId] = useState("")

    const handleChange = (e) => {
        setNurseId(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/patients/${patient.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nurse_id: nurseId,
            }),
        })
        .then(res => res.json())
        .then(updatedNurseId => handleUpdatePatient(updatedNurseId))
    }
    
  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
        <input
            type="number"
            name="nurse_id"
            value={nurseId}
            min={1}
            onChange={handleChange}
        />
        <input type="submit" value="Save" />
    </form>
  )
}

export default EditPatient