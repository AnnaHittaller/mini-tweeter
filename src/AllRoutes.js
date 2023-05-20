import { Route, Routes } from "react-router-dom";
import ResultsPage from "./components/ResultsPage";
import { Main } from "./components/main";
import LoginPage from "./components/LoginPage";

function AllRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/all-users"/>
            <Route path="post/:id"/>
            <Route path="*" element={<h2>Error 404: Page Not Found</h2>}/>
        </Routes>
    );
}

export default AllRoutes;