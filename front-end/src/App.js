import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { Register } from "./components/Register.jsx"
import { Home } from "./components/Home.jsx"
import { Portal } from "./components/Portal.jsx"
import { Login2 } from "./components/Login2"
import Account from "./components/Account.jsx"
import PDFviewer from "./components/PdfViewer.jsx"
import axios from 'axios';

function App() {
	let navigate = useNavigate();
	const [data, setData] = useState(null);
	console.log(data)
	const handleClick = (username, password) => {
		axios
			.post('http://localhost:6789/api/login', {
				username: username,
				password: password
			})
			.then(response => {

				setData(response.data)
				if (data !== null)
					if (data.message === "true")
						if (data.user[0].hospitals.length > 0)
							navigate("/portal/account")
						else
							navigate("/portal")
			})
			.catch(error => console.error(error));

	}
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/portal" element={<Portal user={data!==null&&data?.user[0]!==undefined?data?.user[0]:null} />} />
			<Route path="/login" element={<Login2 handleClick={handleClick} data={data} />} />
			<Route path="/register" element={<Register />} />
			<Route path="/PDFviewer" element={<PDFviewer />} />
			<Route path="/portal/account" element={<Account  items={data!==null&&data.items!==undefined?data.items:null} user={data!==null&&data.user[0]!==undefined?data.user[0]:null} />} />
		</Routes>
	);
}

export default App;
