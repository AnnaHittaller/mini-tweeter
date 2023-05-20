import { useParams } from "react-router";
import MainLayout from "../layouts/MainLayout";
import "../styles/userPage.css";
import { useEffect, useState } from "react";

function UserPage() {
	const id = useParams();
	//console.log('id', id.id)
	const [user, setUser] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(
					`https://twitter-express-server.vercel.app/users/listone?id=${id.id}`
				);
				const userData = await response.json();
				//console.log("user-one", userData);
				setUser(userData.user);
				console.log(user);
			} catch (error) {
				console.log("Error", error);
			}
		};
		fetchUser();
	}, [id]);

	return (
		<MainLayout>
			<div className="user-page">
				<div className="user-card">
					{user ? (
						<>
							<img src={user.image} alt="user profile picture" />
							<div className="user-data">
								<h2>{user.username}</h2>
								<p>
									<strong>Location: </strong>
									{user.city}, {user.country}
								</p>
								<p>
									<strong>Pronouns: </strong>{" "}
									{user.gender === "Male" ? "He / Him" : "She / Her"}
								</p>
								<p>
									Likes{" "}
									{user.hobbies &&
										user.hobbies.length > 0 &&
										user.hobbies.slice(0, -1).join(", ")}
									{user.hobbies && user.hobbies.length > 1 && " and "}{" "}
									{user.hobbies && user.hobbies.slice(-1)}
								</p>
							</div>
						</>
					) : (
						<p>Data is loading...</p>
					)}
				</div>
			</div>
		</MainLayout>
	);
}

export default UserPage;
