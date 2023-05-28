import { useParams } from "react-router";
import MainLayout from "../layouts/MainLayout";
import "../styles/userPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function UserPage() {
	const id = useParams();
	//console.log('id', id.id)
	const [user, setUser] = useState({});
	const [userTweet, setUserTweet] = useState([]);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(
					`https://twitter-express-server.vercel.app/users/listone?id=${id.id}&api_key=${process.env.REACT_APP_MINI_TWEETER_API_KEY}`
				);
				const userData = await response.json();
				//console.log("user-one", userData);
				setUser(userData.user);

			} catch (error) {
				console.log("Error", error);
			}
		};
		fetchUser();

		/// Here I am fetching all tweets again

	}, [id]);
	
	useEffect(() => {
		const fetchTweets = async () => {
			if (user) {
				try {
					const response = await fetch(
						`https://twitter-express-server.vercel.app/posts/listbyuser?user=${user._id}&api_key=${process.env.REACT_APP_MINI_TWEETER_API_KEY}`
					);
					const tweetData = await response.json();
					if (response.ok) {
						setUserTweet(tweetData.posts);
					}
				} catch (error) {
					console.log("Error", error);
				}
			}
		};
		fetchTweets();
	}, [user]);
	/// Here I try to filter all tweets with owner username that are equal to username from users list

	// const filteredTweets = userTweet.filter(item => item.posts.owner.username === user.username);

	console.log(user._id);
	console.log("usertweet", userTweet);
	return (
		<MainLayout>
			<div className="user-page">
				<div className="user-page-post">
					<Link to="/all-users">
						<MdOutlineArrowBackIosNew className="user-page-post-back" />
					</Link>
					<p>Back to Users List</p>
				</div>
				<div className="user-card">
					{user ? (
						<>
							<img src={user.image} alt="user profile picture" />
							<div className="user-data">
								<h2>{user.username}</h2>
								<p className="user-email">
									<strong>Email: </strong>
									{user.email}
								</p>
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
				<div className="all-tweets-from">
					<p>
						All tweets from{" "}
						<span className="all-tweets-from-span">{user.username}</span>
					</p>
					<div>
						{userTweet?.map((item, index) => (
							<p className="post" key={index}>
								<Link to={`/user/${item.owner._id}`}>
									<img src={item.owner.image} />
								</Link>
								<div className="post-content">
									<Link className="post-content-title">
										{item.owner.username}
									</Link>
									<Link className="post-content-text" to={`/post/${item._id}`}>
										{" "}
										{item.text}
									</Link>
									<p className="post-content-date">
										Posted on {new Date(item.date).toLocaleString()}
									</p>
								</div>
							</p>
						))}
					</div>
				</div>
			</div>
		</MainLayout>
	);
}

export default UserPage;
