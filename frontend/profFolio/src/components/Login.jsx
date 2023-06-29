import { useState } from 'react'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="login-container">
        <div className="title">
              <h2>LOGIN</h2>
              <div className="underline"></div>
        </div>
        <form  action="" method="post">
          <label htmlFor="userName">User Name:</label>
          <input type="text" name="userName" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <a href= "/register">Register</a>
          <button type="submit" >Login</button>
        </form>
       </div>

    </>
  )
}

export default Login;
