import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SearchContext from "./context/SearchContext";
import AuthContext from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<AuthContext>
			<SearchContext>
				<App />
			</SearchContext>
		</AuthContext>
	</BrowserRouter>
);
