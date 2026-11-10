
import api from "./api";

export const loginUser = (data) => {
    return api.post("/api/auth/login", data);
};

export const forgotPassword = (data) => {
    return api.post("/api/auth/forgot-password", data);
};
