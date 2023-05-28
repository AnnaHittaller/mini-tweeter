import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "../styles/allUsersPage.css";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

function AllUsersPage() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(
					`https://twitter-express-server.vercel.app/users/list?api_key=${process.env.REACT_APP_MINI_TWEETER_API_KEY}`
				);
				const userData = await response.json();
				setUsers(userData.users);
				console.log("users-all", userData.users);
			} catch (error) {
				console.log("Error", error);
			}
		};
		fetchUser();
	}, []);

	return (
		<MainLayout>
			<div className="users-page">
				<div className="users-page-post">
					<Link to="/">
						<MdOutlineArrowBackIosNew className="users-page-post-back" />
					</Link>
					<p>Back to Feed</p>
				</div>
				<div className="posts">
					{users ? (
						users?.map((item, index) => (
							<p className="post" key={index}>
								<Link to={`/user/${item._id}`}>
									<img src={item.image} />
								</Link>
								<Link to={`/user/${item._id}`} className="post-content">
									<p className="post-content-title">{item.username}</p>
									<p className="post-content-id">{item.city}, {item.country}</p>
								</Link>
							</p>
						))
					) : (
						<p>Loading...</p>
					)}
				</div>
			</div>
		</MainLayout >
	);
}

export default AllUsersPage;
