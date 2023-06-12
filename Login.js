import React, { useState } from 'react'
import "./login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  alert("You have logged in!!!")
  }

  return (
    <div className='container'>

      <div className='form-container'>
        <h3>Log In</h3>
        <form onSubmit={handleSubmit} className='form'>
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
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>

  )
}

export default Login