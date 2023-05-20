import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "../styles/allUsersPage.css";
import { Link } from "react-router-dom";

function AllUsersPage() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(
					"https://twitter-express-server.vercel.app/users/list"
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
				<div className="posts">
					{users ? (
						users.map((item, index) => (
							<p className="post" key={index}>
								<Link to={`/user/${item._id}`}>
									<img src={item.image} />
								</Link>
								<div className="post-content">
									<p className="post-content-title">{item.username}</p>
								</div>
							</p>
						))
					) : (
						<p>Loading...</p>
					)}
				</div>
			</div>
		</MainLayout>
	);
}

export default AllUsersPage;
