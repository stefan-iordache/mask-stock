import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Login2({ handleClick, data }) {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    // Check if user is already logged in and redirect
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      navigate("/portal/account");
    }
  }, [navigate]);

  const handleLogin = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    handleClick(username, password);
  };

  const storeToken = (token) => {
    localStorage.setItem("userToken", token);
  };

  return (
    <>
      <div className="login-page spacer gradient">
        <div className="login-page-box">
          <p>Username:</p>
          <input className="user-name" ref={usernameRef} />
          <p>Password:</p>
          <input type="password" className="password" ref={passwordRef} />
          <br />
          <br />
          <button onClick={handleLogin}>Submit</button>

          <div>
            {data ? (
              <p>{data.message !== "true" ? data.message : null}</p>
            ) : (
              <p></p>
            )}
          </div>
          <br />
          <Link to="/register">Don't have an account? Register!</Link>
        </div>
      </div>
    </>
  );
}
