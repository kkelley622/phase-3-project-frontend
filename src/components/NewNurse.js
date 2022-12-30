import React, { useState } from 'react'

const NewNurse = ( {handleSubmit} ) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        shift: "",
        phone_ext: 0
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const clearForm = (e) => {
        e.preventDefault()
        console.log(formData)
        handleSubmit(e, formData)
        setFormData({
            firstname: "",
            lastname: "",
            shift: "",
            phone_ext: 0
        })
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
            <label>Shift: </label>
                <input
                    type="text" 
                    name="shift" 
                    aria-label="shift"
                    value={formData.shift}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <label>Phone Number: </label>
                <input
                    type="number" 
                    name="phone_ext" 
                    aria-label="phone_ext"
                    value={formData.phone_ext}
                    min={0}
                    max={999}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <input type="submit"></input>
        </form>
    </div>

  )

}

export default NewNurse