import { useState } from "react"
import { Link, Routes, Route } from "react-router-dom"
import { Login } from "./components/Login.jsx"
import { Register } from "./components/Register.jsx"
import { Home } from "./components/Home.jsx"
import { Portal } from "./components/Portal.jsx"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				{loggedIn ? <Route path="/" element={<Portal />} />
				: <Route path="/" element={<Home />} />}
		</Routes>
  );
}

export default App;
