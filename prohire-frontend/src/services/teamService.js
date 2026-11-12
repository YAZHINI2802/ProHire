
import api from "./api";

// Get all teams
export const getAllTeams = () => {
    return api.get("/api/teams");
};

// Add new team
export const addTeam = (teamData) => {
    return api.post("/api/teams", teamData);
};
