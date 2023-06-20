import { Link } from "react-router-dom"
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
						<input className="full-name" name="name"></input>
						<p>Username:</p>
						<input className="user-name" name="username"></input>
						<p>Email:</p>
						<input className="email" name="email"></input>
						<p>Password:</p>
						<input
							type="password"
							className="password"
							name="password"
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
