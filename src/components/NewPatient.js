import React, { useState } from 'react'

const NewPatient = ( {handleSubmit} ) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        age: 0,
        room_number: 750,
        diagnosis: "", 
        nurse_id: 0
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const clearForm = (e) => {
        handleSubmit(e, formData)
        setFormData({
            firstname: "",
            lastname: "",
            age: 0,
            room_number: 0,
            diagnosis: "", 
            nurse_id: 0
        })
      }

  return (
    <div >
        <form onSubmit={clearForm} className='form-container'>
            <label className='form-label'>First Name: </label>
                <input
                    className='form-input'
                    type="text" 
                    name="firstname" 
                    aria-label="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <label className='form-label'>Last Name: </label>
                <input
                    className='form-input'
                    type="text" 
                    name="lastname" 
                    aria-label="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <label className='form-label'>Age: </label>
                <input
                    className='form-input'
                    type="number" 
                    name="age" 
                    aria-label="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <label className='form-label'>Room Number: </label>
                <input
                    className='form-input'
                    type="number" 
                    name="room_number" 
                    aria-label="room_number"
                    value={formData.room_number}
                    min={750}
                    max={780}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <label className='form-label'>Diagnosis: </label>
                <input
                    className='form-input'
                    type="text" 
                    name="diagnosis" 
                    aria-label="diagnosis"
                    value={formData.diagnosis}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <label className='form-label'>Nurse ID: </label>
                <input
                    className='form-input'
                    type="number" 
                    name="nurse_id" 
                    aria-label="nurse_id"
                    value={formData.nurse_id}
                    min={1}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <input type="submit" className='form-submit'></input>
        </form>
    </div>
  )
}

export default NewPatient