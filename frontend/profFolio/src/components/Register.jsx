import { useState } from "react";
import LoginBackground from "../assets/LoginBackground.png";

const Register = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="login-container">
        <div className="title">
          <h2>Register</h2>
        </div>
        <div>
          <img className="" src={LoginBackground} />
        </div>
        <form action="" method="post">
          <div className="form-inouts">
            <input type="text" name="user[email]" />
          </div>
          <div className="form-inputs">
            <input type="text" name="user[phoneNum]" />
          </div>
          <div className="form-inputs">
            <input type="text" name="user[userName]" />
          </div>
          <div className="form-inputs">
            <input type="password" name="user[password]" />
          </div>
          <button type="submit">Register</button>
          <button type="submit">back</button>
        </form>
      </div>
    </>
  );
};

export default Register;
