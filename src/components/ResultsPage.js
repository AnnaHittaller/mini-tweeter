import { useContext, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import '../styles/resultsPage.css'
import { SearchContext } from "../context/SearchContext";
import { Link } from "react-router-dom";

function ResultsPage() {
	const { query } = useContext(SearchContext);
	console.log("query", query)
	const [filteredResults, setFilteredResults] = useState([])
	const [filteredUsers, setFilteredUsers] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://twitter-express-server.vercel.app/posts/search?text=${query}`
				);
				const data = await response.json();
				console.log(data)
				setFilteredResults(data.posts)
			} catch (error) {
				console.log("Error", error);
			}
		};

		const fetchUser = async () => {
			try {
				const response = await fetch(
					`https://twitter-express-server.vercel.app/users/list?api_key=${process.env.REACT_APP_MINI_TWEETER_API_KEY}`
				);
				const userData = await response.json();
				console.log("users", userData)
				const filteredData = userData.users.filter((user) => {
					return user.username.includes(query)
				})
				console.log("filtereddata", filteredData)
				setFilteredUsers(filteredData)
				console.log(filteredUsers)
			} catch (error) {
				console.log("Error", error);
			}
		};

		fetchData();
		fetchUser()
	}, [query]);

	return (
		<MainLayout>
			<div className="page">
				<h2>Search results for: {query}</h2>
				<div className="posts">
					{" "}
					<h3>In Posts:</h3>
					{filteredResults && filteredResults.length > 0
						? filteredResults.map((item, index) => (
							<p className="post" key={index}>
								<Link to={`/user/${item.owner._id}`}>
									<img src={item.owner.image} />
								</Link>
								<div className="post-content">
									<p className="post-content-title">{item.owner.username}</p>
									<p>{item.text}</p>
									<p className="post-content-date">
										Posted on {new Date(item.date).toLocaleString()}
									</p>
								</div>
							</p>
						))
						: "Sorry, no matching posts found"}
				</div>
				<div className="posts">
					<h3>In Users:</h3>
					{filteredUsers && filteredUsers.length > 0
						? filteredUsers.map((item, index) => (
							<p className="post" key={index}>
								<Link to={`/user/${item._id}`}>
									<img src={item.image} />
								</Link>
								<div className="post-content">
									<p className="post-content-title">{item.username}</p>
								</div>
							</p>
						))
						: "Sorry, no matching users found"}
				</div>
			</div>
		</MainLayout>
	);
}

export default ResultsPage;
