import React, { useState } from "react"
import axios from "axios"
export default function ChooseHospital({ user, hospital }) {
	const [clicked, setClicked] = useState(false)
	const handleClick = (hospital, action) => {
		if (action === true) user.hospitals.push(hospital)
		else
			user.hospitals = user.hospitals.filter(
				(userHospital) => userHospital !== hospital
			)

		axios
			.patch(
				`http://localhost:6789/api/user/${user._id}`,
				{
					hospitals: user.hospitals,
				},
				{
					headers: { "Content-type": "application/json" },
				}
			)
			.catch((error) => console.log(error))
		setClicked(!clicked)
	}
	return (
		<>
			<div className="hospital">
			<h3 className="hospital-name">{hospital}</h3>
				<button
					disabled={
						user.hospitals.find(
							(userHospital) => userHospital === hospital
						) === undefined
					}
					onClick={() => {
						handleClick(hospital, false)
					}}
				>
					-
				</button>
				
				<button
					disabled={
						user.hospitals.find(
							(userHospital) => userHospital === hospital
						) !== undefined
					}
					onClick={() => {
						handleClick(hospital, true)
					}}
				>
					+
				</button>
			</div>
		</>
	)
}
