import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import HospitalOrder from "./HospitalOrder.jsx"
export default function Account({ user, items }) {
	const [amount, setAmount] = useState(items[0].amount)
	const placeOrder = (newAmount) => {
		setAmount(newAmount)
	}
	let navigate = useNavigate()
	useEffect(() => {
		if (user === null) navigate("/")
	}, [])
	return (
		<>
			<div className="choose-hospital spacer waves1">
				<div className="nav">
          <h2 className="user-title">{user.name}</h2>
          <h2 className="selling-item">
					{items.map((item) => item.name)} {amount}
          </h2>
          <button
					className="add-hospitals"
					onClick={() => {
						navigate("/portal", {
							state: {
								edit: true,
							},
						})
					}}
				>
					Manage hospitals
				</button>
				</div>
				<div className="hospital-list">
					{user.hospitals.map((hospital, index) => (
            <>
						<HospitalOrder
							placeOrder={placeOrder}
							item={items[0]}
							user={user}
							key={index}
							hospital={hospital}
						/>
            </>
					))}
				</div>
			</div>
		</>
	)
}
