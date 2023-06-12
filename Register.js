import React, { useState } from 'react'
import "./register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password);
    alert("You have registered successfully!!!")
  }

  return (
    <div className='container'>
      <div className='form-container signup'>
        <form onSubmit={handleSubmit} className='form'>
          <h3>Sign Up!</h3>
          <label htmlFor="name">Enter your name: </label>
          <input type="text"
            value={name}
            placeholder='your name'
            id="name"
            onChange={(event) => setName(event.target.value)} />
          <label htmlFor="email">Enter your email: </label>
          <input type="email"
            value={email}
            placeholder='email@abc.com'
            id="email"
            onChange={(event) => setEmail(event.target.value)} />
          <label htmlFor="password">Enter your password: </label>
          <input type="password"
            value={password}
            placeholder='**********'
            id="password"
            onChange={(event) => setPassword(event.target.value)} />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>

  )
}

export default Register