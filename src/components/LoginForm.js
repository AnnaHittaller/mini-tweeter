import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router";

function LoginForm() {
	const { login, isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate()

	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		login(userData.email, userData.password);
        navigate("/")
	};

    

	return (
		<form onSubmit={handleSubmit} className="login-form">
			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
                placeholder="email"
				onChange={(e) => setUserData({ ...userData, email: e.target.value })}
			/>
			<label htmlFor="password">
				Password
			</label>
			<input
				type="password"
				id="password"
				name="password"
                placeholder="password"
				onChange={(e) => setUserData({ ...userData, password: e.target.value })}
			/>
			<button type="submit">
				Log in
			</button>
		</form>
	);
}

export default LoginForm;
