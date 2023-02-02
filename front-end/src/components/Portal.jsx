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
			<div className="nav">
				<h2 className="user-title">Hi {user.name}</h2>
				<button
				className="add-hospitals	"
					onClick={() => {
						navigate("/portal/account")
					}}
				>
					Done
				</button>
				<button
					className="add-hospitals"
					onClick={() => {
						navigate("/")
					}}
				>
					Log out
				</button>
				</div>
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
				
			</div>
		</>
	)
}
