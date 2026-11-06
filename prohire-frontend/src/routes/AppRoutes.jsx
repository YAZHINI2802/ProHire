import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserList from "../pages/UserList";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/users" element={<UserList />} />
      <Route path="*" element={<Navigate to="/users" replace />} />
    </Routes>
  );
}

export default AppRoutes;