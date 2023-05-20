import { useContext } from "react";
import MainLayout from "../layouts/MainLayout";
import '../styles/resultsPage.css'
import { SearchContext } from "../context/SearchContext";

function ResultsPage() {
	const { query } = useContext(SearchContext);
	return (
		<MainLayout>
			<div className="page">
				<h2>Results for: {query}</h2>
			</div>
		</MainLayout>
	);
}

export default ResultsPage;
