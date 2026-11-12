
import api from "./api";

// Get all users
export const getAllUsers = () => {
    return api.get("/api/users");
};

// Add new user
export const addUser = (data) => {
    return api.post("/api/users", data);
};
