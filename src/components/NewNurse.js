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
            <label className='form-label'>Shift: </label>
                <input
                    className='form-input'
                    type="text" 
                    name="shift" 
                    aria-label="shift"
                    value={formData.shift}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <label className='form-label'>Phone Number: </label>
                <input
                    className='form-input'
                    type="number" 
                    name="phone_ext" 
                    aria-label="phone_ext"
                    value={formData.phone_ext}
                    max={999}
                    onChange={handleChange}
                    required
                />
                <br></br>
            <input type="submit" className='form-submit'></input>
        </form>
    </div>

  )

}

export default NewNurse