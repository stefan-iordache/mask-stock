import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import ChooseHospital from "./ChooseHospital"
import hospitals from "../names.json"
export function Portal({ user }) {
	console.log(user)
	let navigate = useNavigate()
	const location = useLocation()
	let edit = false
	if (location.state !== null) edit = true
	useEffect(() => {
		if (user === null) navigate("/")
	}, [])
	return (
		<>
			<div className="account spacer waves2">
				<h2 className="portal-name">Hi {user.name}</h2>
				<div className="hospital-list">
					{user.hospitals.length === 0 || edit === true
						? hospitals.map((hospital) => (
								<ChooseHospital
									key={user._id}
									user={user}
									hospital={hospital}
								/>
						  ))
						: null}
				</div>
				<button
					onClick={() => {
						navigate("/portal/account")
					}}
				>
					Done
				</button>
				<button
					className="logout-button"
					onClick={() => {
						navigate("/")
					}}
				>
					Log out
				</button>
			</div>
		</>
	)
}
