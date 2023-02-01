import { useEffect } from "react"
import { Link, useResolvedPath } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"
import ChooseHospital from "./ChooseHospital"
import hospitals from "../names.json"
export function Portal({ user }) {
    console.log(user);
    let navigate = useNavigate()
    const location = useLocation()
    let edit = false;
    if (location.state.edit !== undefined)
        edit = location.state.edit
    useEffect(() => {
        if (user === null)
            navigate("/")
    }, [])


    console.log(user)
    return (
        <>
            <h2>Hi {user.name}</h2>

            {user.hospitals.length === 0||edit === true ? hospitals.map(hospital => <ChooseHospital key={user._id} user={user} hospital={hospital} />):null
            }
            <button onClick={() => { navigate("/portal/account") }}>Done</button>
            <button onClick={() => { navigate("/") }}>Log out</button>
        </>
    )
}