import { Link } from "react-router-dom"

export function Login() {
    return (
        <>
            <h2>Login</h2>
            <form action="/login" method="POST">
                <div>
                <p>Username:</p>
                <input className="user-name" name="userName"></input>
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