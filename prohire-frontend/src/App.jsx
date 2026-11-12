import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import BackendCoordinator from "./pages/BackendManager/BackendCoordinator";
import UserList from "./pages/UserManagement/UserList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/backend-coordinator" element = {<BackendCoordinator/>}/>
                <Route path="/user-management" element = {<UserList/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;