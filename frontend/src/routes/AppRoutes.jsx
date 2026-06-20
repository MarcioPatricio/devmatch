import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import JobList from "../pages/JobList";
import CreateJob from "../pages/CreateJob";

import EditJob from "../pages/EditJob";

export default function AppRoutes() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<JobList />}
                />

                <Route
                    path="/create"
                    element={<CreateJob />}
                />

                <Route
                    path="/edit/:id"
                    element={<EditJob />}
                />

            </Routes>

        </BrowserRouter>
    );
}