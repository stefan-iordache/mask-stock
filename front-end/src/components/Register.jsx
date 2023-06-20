import { Link } from "react-router-dom";

export function Register() {
  return (
    <>
      <div className="registration-page spacer gradient2">
        <div className="registration-page-box">
          <h2>Registration</h2>
          <form action="http://localhost:6789/api/newUser" method="POST">
            <p>Full name:</p>
            <input
              className="full-name"
              name="name"
              required // Add 'required' attribute for mandatory field
            ></input>
            <p>Username:</p>
            <input
              className="user-name"
              name="username"
              required
            ></input>
            <p>Email:</p>
            <input
              className="email"
              name="email"
              type="email" // Add 'type' attribute for email validation
              required
            ></input>
            <p>Password:</p>
            <input
              type="password"
              className="password"
              name="password"
              minLength="8" // Add 'minLength' attribute for minimum password length
              required
            ></input>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
          <br />
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </div>
    </>
  );
}
