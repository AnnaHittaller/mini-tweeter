import { Route, Routes } from "react-router-dom";
import ResultsPage from "./components/ResultsPage";
import { Main } from "./components/main";
import { Post } from "./components/post"
import LoginPage from "./components/LoginPage";
import UserPage from "./components/UserPage";
import AllUsersPage from "./components/AllUsersPage";

function AllRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/results" element={<ResultsPage />} />

 
            <Route path="/login" element={<LoginPage />} />
            <Route path="/all-users" element={<AllUsersPage />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="*" element={<h2>Error 404: Page Not Found</h2>} />

        </Routes>
    );
}

export default AllRoutes;