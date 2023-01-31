import { Link } from "react-router-dom"

export function Login() {
    return (
        <>
            <h2>Login</h2>
            <form action="http://localhost:6789/api/login" method="POST">
                <div>
                <p>Username:</p>
                <input className="user-name" name="username"></input>
                </div>
                <p>Password:</p>
                <input type="password" className="password" name="password"></input>
                <button type="submit">Submit</button>
            </form>
            <br/>
            <Link to="/register">Don't have an account? Register</Link>
        </>
    )
}