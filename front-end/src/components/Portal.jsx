import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export function Portal({user}) {
    let navigate=useNavigate()
    useEffect(()=>{
        if(user===null)
        navigate("/")
    },[])
    return (
        <>
            <h2>Hi {user.name}</h2>
            <button className="logout-button" onClick={()=>{navigate("/")}}>Log out</button>
            <button className="add-hospitals">Add hospitals</button>
            <ul className="hospital-list">
                {user.hospitals.length != 0 ? user.hospitals.map((item, index) => (
                    <div className="hospital">
                        <li key={index}>{index + 1} {item} <button>Order masks</button></li>
                    </div>
                ))
            :null
            }
            </ul>
        </>
    )
}