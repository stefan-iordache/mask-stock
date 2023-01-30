import { Link } from "react-router-dom"

export function Register() {
    return (
        <>
            <h2>Registration</h2>
            <form action="http://localhost:6789/api/hospitals" method="POST">
                <p>Username:</p>
                <input className="user-name" name="userName"></input>
                <p>Password:</p>
                <input type="password" className="password" name="password"></input>
                <p>Email:</p>
                <input className="email" name="email"></input>
                <p>Full name:</p>
                <input className="full-name" name="fullName"></input>
                <button type="submit" onClick={ () => {}}>Submit</button>
            </form>
            <br/>
            <Link to="/login">Already have an account? Login</Link>
        </>
    )
}