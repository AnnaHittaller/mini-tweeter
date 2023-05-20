import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ResultsPage from "./components/ResultsPage";

function AllRoutes() {
    return ( 
        <Routes>
            <Route exact path="/" element={<MainLayout/>}/>
            <Route path="/results" element={<ResultsPage/>}/>
        </Routes>
    );
}

export default AllRoutes;