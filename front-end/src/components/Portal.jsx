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
            <button onClick={()=>{navigate("/")}}>Log out</button>
            {user.hospitals.length != 0 ? user.hospitals.map((hospital, index) => {
                <div className="hospital">
                    <p>index</p>
                    <p>{hospital}</p>
                </div>
            })
            : null
            }
        </>
    )
}