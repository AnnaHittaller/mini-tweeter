import { useContext, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import '../styles/resultsPage.css'
import { SearchContext } from "../context/SearchContext";

function ResultsPage() {
	const { query } = useContext(SearchContext);
    console.log("query", query)
    const [filteredResults, setFilteredResults] = useState([])
    const [filteredUsers, setFilteredUsers]= useState([])

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
                        "https://twitter-express-server.vercel.app/users/list"
                        );
                        const userData = await response.json();
                        console.log("users", userData)
                        const filteredData = userData.users.filter((user)=> {
                           return user.username.includes(query)
                        })
                        console.log("filtereddata",filteredData)
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
								<p key={index}>
									<img src={item.owner.image} />
									<div>
										<p>{item.owner.username}</p>
										<p>{item.text}</p>
										<p>{item.date}</p>
									</div>
								</p>
						  ))
						: "Sorry, no matching posts found"}
				</div>
				<div>
					<h3>In Users:</h3>
					{filteredUsers && filteredUsers.length > 0
						? filteredUsers.map((item, index) => (
								<p key={index}>
									<img src={item.image} />
									<div>
									<p>{item.username}</p>
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
