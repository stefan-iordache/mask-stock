import React, { useState}from 'react'
import axios from 'axios';
export default function ChooseHospital({ user, hospital }) {
    const [clicked,setClicked]=useState(false)
    console.log(user.hospitals);
    const handleClick = (hospital) => {
        user.hospitals.push(hospital);
        setClicked(true);
        axios
            .patch(`http://localhost:6789/api/user/${user._id}`, {
                hospitals:user.hospitals
            },
                {
                    headers: { 'Content-type': 'application/json' }
                }
            ).catch(error => console.log(error))

    }
    return (
        <>
            <div>
                {hospital}
                <button disabled={clicked} onClick={() => { handleClick(hospital) }}>+</button>
            </div>
        </>
    )

}
