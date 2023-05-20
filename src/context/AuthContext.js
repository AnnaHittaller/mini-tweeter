import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextFunction({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const login = (email, password) => {
		if (email === "user4@example.com" && password === "1234") {
			setIsLoggedIn(true);
		}
	};
	const logout = () => {
		setIsLoggedIn(false);
	};

    

	return (
		<AuthContext.Provider value={{ isLoggedIn, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
