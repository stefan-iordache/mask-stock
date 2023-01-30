import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
            <h2>Welcome</h2>
            <Link to="/login">Do you already have an account?</Link>
            <h3>Otherwise create an account by <Link to="/register">clicking here!</Link></h3>
        </>
    )
}