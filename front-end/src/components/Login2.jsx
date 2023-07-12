import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"

export function Login2({ handleClick, data }) {
	const usernameRef = useRef()
	const passwordRef = useRef()
	const [error, setError] = useState("")

	const handleSubmit = () => {
		const username = usernameRef.current.value
		const password = passwordRef.current.value

		// Basic validation checks
		if (username.trim() === "") {
			setError("Please enter a username")
			return
		}

		if (password.trim() === "") {
			setError("Please enter a password")
			return
		}

		// Call the handleClick function if inputs are valid
		handleClick(username, password)
	}

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
					<button onClick={handleSubmit}>Submit</button>

					<div>
						{data && <p>{data.message !== "true" ? data.message : null}</p>}
					</div>
					{error && <p>{error}</p>}
					<br />
					<Link to="/register">Don't have an account? Register!</Link>
				</div>
			</div>
		</>
	)
}
