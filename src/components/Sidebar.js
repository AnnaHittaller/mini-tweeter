import '../styles/sidebar.css'
import { BsFillPersonFill, BsGeoAltFill } from "react-icons/bs";
import { RiHome7Fill } from "react-icons/ri";
import SearchBar from './SearchBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {

    const navigate = useNavigate()

    return (
			<aside>
				<div className="profile">
					<img src="https://robohash.org/2LK.png" alt="user-profile-pic" />
					<h3>
						<BsFillPersonFill className="icon" />
						user4
					</h3>
					<p>
						<BsGeoAltFill className="icon" />
						Tokyo
					</p>
				</div>
				<div className="search-container">
					<SearchBar />
				</div>
				<div>
					<button onClick={()=> navigate("/")}>
						<RiHome7Fill className="icon" />
						Home
					</button>
				</div>
			</aside>
		);
}

export default Sidebar;