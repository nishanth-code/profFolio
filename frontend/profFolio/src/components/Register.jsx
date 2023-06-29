import { useState } from 'react'

function Register() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="register-container">
        <div className="title">
              <h2>Register</h2>
              <div className="underline"></div>
        </div>
        <form  action="" method="post">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
          <label htmlFor="phoneNum"> Phone no:</label>
          <input type="text" name="phoneNum" />
          <label htmlFor="userName">User Name:</label>
          <input type="text" name="userName" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <button type="submit">Register</button>
        </form>
       </div>

    </>
  )
}

export default Register;