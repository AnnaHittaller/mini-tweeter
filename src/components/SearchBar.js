import { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

function SearchBar() {
	const navigate = useNavigate();
	const { query, setQuery } = useContext(SearchContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (query === "") {
			alert("Please type something");
			return;
		}
		navigate("/results");
	};

	// console.log(query);

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				id="search"
				placeholder="Search..."
				name="search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button type="submit">
				<BiSearch />
			</button>
		</form>
	);
}

export default SearchBar;
