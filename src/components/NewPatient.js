import React, { useState } from 'react'

const NewPatient = ( {handleSubmit} ) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        age: 0,
        room_number: 0,
        diagnosis: "", 
        nurse_id: 0
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const clearForm = (e, patientObj) => {
        handleSubmit(e, patientObj)
        setFormData({
            firstname: "",
            lastname: "",
            age: 0,
            room_number: 0,
            diagnosis: "", 
            nurse_id: 0
        })
        alert("The Patient Was Successfully Added")
      }

    


  return (
    <div>
        <form onSubmit={clearForm}>
            <label>First Name: </label>
                <input
                    type="text" 
                    name="firstname" 
                    aria-label="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <label>Last Name: </label>
                <input
                    type="text" 
                    name="lastname" 
                    aria-label="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <label>Age: </label>
                <input
                    type="text" 
                    name="age" 
                    aria-label="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <label>Room Number: </label>
                <input
                    type="text" 
                    name="room_number" 
                    aria-label="room_number"
                    value={formData.room_number}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <label>Diagnosis: </label>
                <input
                    type="text" 
                    name="diagnosis" 
                    aria-label="diagnosis"
                    value={formData.diagnosis}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <label>Nurse: </label>
                <input
                    type="text" 
                    name="nurse_id" 
                    aria-label="nurse_id"
                    value={formData.nurse_id}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default NewPatient