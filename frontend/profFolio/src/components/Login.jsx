import { useState } from 'react'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="login-container">
        <div className="title">
              <h2>LOG IN</h2>
              <p>Login with one of the following options</p>
        </div>
        <form  action="" method="post">
        <button><img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/> Continue with Google</button>
        <button> Continue with LinkedIn</button>

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
