import "../styles/sidebar.css";
import { BsFillPersonFill, BsGeoAltFill } from "react-icons/bs";
import { RiHome7Fill } from "react-icons/ri";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import SearchBar from "./SearchBar";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";

function Sidebar() {
	const navigate = useNavigate();
	const { setQuery } = useContext(SearchContext);
	const { isLoggedIn, logout } = useContext(AuthContext);
	//console.log(isLoggedIn);

	const backHome = () => {
		navigate("/");
		setQuery("");
	};

	return (
		<aside>
			<div className="profile">
				{isLoggedIn ? (
					<>
						<img src="https://robohash.org/2LK.png" alt="user-profile-pic" />
						<h3>
							<BsFillPersonFill className="icon" />
							user4
						</h3>
						<p>
							<BsGeoAltFill className="icon" />
							Tokyo
						</p>
					</>
				) : (
					<h3>Hello Guest</h3>
				)}
			</div>
			<div className="search-container">
				<SearchBar />
			</div>
			<div className="buttons">
				<button onClick={backHome}>
					<RiHome7Fill className="icon" />
					Home
				</button>
				<button onClick={()=> navigate("/all-users")}>
					<BsFillPersonFill className="icon" />
					Users List
				</button>
				{isLoggedIn ? (
					<button onClick={logout}>
						<BiLogOut className="icon" />
						Log Out
					</button>
				) : (
					<button onClick={() => navigate("/login")}>
						<BiLogIn className="icon" />
						Log In
					</button>
				)}
			</div>
		</aside>
	);
}

export default Sidebar;
