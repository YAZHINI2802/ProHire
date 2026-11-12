
import api from "./api";

// Get all designations
export const getAllDesignations = () => {
    return api.get("/api/designations");
};

// Add new designation
export const addDesignation = (designationData) => {
    return api.post("/api/designations", designationData);
};
