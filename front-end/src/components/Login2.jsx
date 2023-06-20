import React, { useRef } from "react"
import { Link } from "react-router-dom"

export function Login2({ handleClick, data }) {
	const usernameRef = useRef()
	const passwordRef = useRef()

	return (
		<>
			<div className="login-page spacer gradient">
				<div className="login-page-box">
					<p>Username:</p>
					<input className="user-name" ref={usernameRef}></input>
					<p>Password:</p>
					<input
						type="password"
						className="password"
						ref={passwordRef}
					></input>
					<br />
					<br />
					<button
						onClick={() => {
							handleClick(
								usernameRef.current.value,
								passwordRef.current.value
							)
						}}
					>
						Submit
					</button>

					<div>
						{data ? <p>{data.message}</p> : <p>Loading...</p>}
					</div>
					<br />
					<Link to="/register">Don't have an account? Register!</Link>
				</div>
			</div>
		</>
	)
}
