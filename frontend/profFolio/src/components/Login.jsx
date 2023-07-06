import { useState } from "react";

function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="login-container">
        <div className="login-details">
          <h2>LOG IN</h2>
          <p>Login with one of the following options</p>
          <form action="" method="post">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
            <button>Continue with Google</button>
            <button> Continue with LinkedIn</button>
            <div className="form-inputs">
              <input
                type="text"
                name="userName"
                placeholder="Email or User Name"
              />
            </div>
            <div className="form-inputs">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <a href="/register">Register</a>
            <button type="submit">Login</button>
            <button type="submit">back</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
