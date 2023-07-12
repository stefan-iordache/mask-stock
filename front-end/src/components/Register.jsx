import React from 'react';
import { Link } from 'react-router-dom';

export function Register() {
	return (
		<>
			<div className="registration-page spacer gradient2">
				<div className="registration-page-box">
					<h2>Registration</h2>
					<form
						action="http://localhost:6789/api/newUser"
						method="POST"
					>
						<p>Full name:</p>
						<input className="full-name" name="name" required></input>
						<p>Username:</p>
						<input className="user-name" name="username" required></input>
						<p>Email:</p>
						<input className="email" name="email" type="email" required></input>
						<p>Password:</p>
						<input
							type="password"
							className="password"
							name="password"
							required
							minLength="6"
						></input>
						<br/>
						<br/>
						<button type="submit">Submit</button>
					</form>
					<br />
					<Link to="/login">Already have an account? Login</Link>
				</div>
			</div>
		</>
	)
}
