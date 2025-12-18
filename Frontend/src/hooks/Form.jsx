import React, { useState } from 'react'

const Form = () => {
    const[form,setForm]=useState({
        name:"",
        email:"",
        password:"",
    })
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form);    }
  return (
    <div>
         <h1>Form</h1>
         <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange}/><br/>
            <label htmlFor="email">Email</label>
            <input type="text"email="email" value={form.email} onChange={handleChange}/><br/> 
            <label htmlFor="password">Password</label>
            <input type="text"password="password" value={form.password} onChange={handleChange}/><br/> 
            <button type="submit">Submit</button>
         </form>
    </div>
  )
}

export default Form