import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom"
import HospitalOrder from "./HospitalOrder.jsx"
export default function Account({user,items}) {
  const [amount,setAmount]=useState(items[0].amount)
  const placeOrder=(newAmount)=>{
    setAmount(newAmount)
  }
  let navigate=useNavigate()
    useEffect(()=>{
        if(user===null)
        navigate("/")
    },[])
  return (
    <>
    <div>
      <div>{items.map(item=>item.name)} {amount}</div>
    {user.hospitals.map((hospital,index)=><HospitalOrder placeOrder={placeOrder} item={items[0]} user={user} key={index} hospital={hospital}/>)}
      <button className="add-hospitals" onClick={()=>{navigate("/portal",{
      state: {
        edit: true,
      }
    })}}>Manage hospitals</button>
    

    </div>

    </>
  )
}
