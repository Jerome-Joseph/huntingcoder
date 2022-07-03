import React, { useState } from 'react'

const Contact = () => {
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(name, email, phone, desc)

    const data = { name, email, phone, desc };

    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
      console.log('Success:', data);
      alert("Thank you for submitting");
      setName('')
      setEmail('')
      setPhone('')
      setDesc('')
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const handleChange =(e)=>{
    if(e.target.name === 'name'){
      setName(e.target.value)
    }
    else if(e.target.name === 'email'){
      setEmail(e.target.value)
    }
    else if(e.target.name === 'phone'){
      setPhone(e.target.value)
    }
    else if(e.target.name === 'desc'){
      setDesc(e.target.value)
    }
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Enter your name here</label>
          <input type="text" className="form-control" id="name" name='name' value={name} onChange={handleChange} aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' value={email} onChange={handleChange} aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Enter your phone number here</label>
          <input type="phone" className="form-control" id="phone" name='phone' value={phone} onChange={handleChange}/>
        </div>
        <label htmlFor="exampleInputPassword1" className="form-label">Enter your queries here</label>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Leave a comment here" id="desc" name='desc' value={desc} onChange={handleChange}></textarea>
      </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  )
}

export default Contact