import { Route, Routes } from "react-router-dom";
import ResultsPage from "./components/ResultsPage";
import { Main } from "./components/main";

function AllRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/results" element={<ResultsPage />} />
        </Routes>
    );
}

export default AllRoutes;