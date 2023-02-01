import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom"
export default function Account({user}) {
  let navigate=useNavigate()
    useEffect(()=>{
        if(user===null)
        navigate("/")
    },[])
  return (
    <>
    <div>
      <button onClick={()=>{navigate("/portal",{
      state: {
        edit: true,
      }
    })}}>Manage hospitals</button>
    </div>
    </>
  )
}
