import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import HospitalOrder from "./HospitalOrder.jsx"
export default function Account({user}) {
  let navigate=useNavigate()
    useEffect(()=>{
        if(user===null)
        navigate("/")
    },[])
  return (
    <>
    <div>
    {user.hospitals.map((hospital,index)=><HospitalOrder user={user} key={index} hospital={hospital}/>)}
      <button className="add-hospitals" onClick={()=>{navigate("/portal",{
      state: {
        edit: true,
      }
    })}}>Manage hospitals</button>
    

    </div>

    </>
  )
}
