
import React, { useState, useEffect } from "react";
import { getAllUsers, addUser } from "../../services/userService";
import MainLayout from "../../components/layout/MainLayout";
import AddUser from "./AddUser";
import AddTeam from "./AddTeam";
import AddDesignation from "./AddDesignation";
import "../../css/UserManagement/UserManagement.css";
import { UserPlus, Users, BriefcaseBusiness } from "lucide-react";
import { getAllTeams, addTeam } from "../../services/teamService";
import {getAllDesignations, addDesignation } from "../../services/designationService";
function UserManagement() {

    // Popup States
    const [showUserModal, setShowUserModal] = useState(false);
    
    const [showDesignationModal, setShowDesignationModal] = useState(false);
    const [showTeamModal, setShowTeamModal] = useState(false);


    // Team and Designation Data
    const [teams, setTeams] = useState([]);
    const [designations, setDesignations] = useState([]);

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);



    const fetchUsers = async () => {
            try {
                setLoading(true);

                const response = await getAllUsers();

                setUsers(response.data);

            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };

        // New function
            const fetchTeams = async () => {
                try {
                    const response = await getAllTeams();
                    setTeams(response.data);
                } catch (error) {
                    console.error("Error fetching teams:", error);
                }
            };

            const fetchDesignations = async () => {
                    try {
                        const response = await getAllDesignations();
                        setDesignations(response.data);
                    } catch (error) {
                        console.error("Error fetching designations:", error);
                    }
                };

            // Existing useEffect – update only this
            useEffect(() => {
                fetchUsers();
                fetchTeams();
                fetchDesignations();
            }, []);

            

    return (
        <MainLayout>

            <div className="user-management-page">

                {/* PAGE HEADING */}
                <div className="um-page-heading">

                    <h2>Employee User List</h2>

                    {/* ACTION BUTTONS */}
                    <div className="um-header-actions">

                        {/* ADD USER BUTTON */}
                        <button
                            onClick={() => setShowUserModal(true)}
                        >
                            <UserPlus size={16} />
                            Add User
                        </button>

                        {/* TEAM BUTTON */}
                        <button onClick={() => setShowTeamModal(true)}>
                            <Users size={16} />
                            Team
                        </button>

                        {/* DESIGNATION BUTTON */}
                        <button
                            onClick={() => setShowDesignationModal(true)}
                        >
                            <BriefcaseBusiness size={16} />
                            Designation
                        </button>

                    </div>

                </div>

                {/* ADD USER COMPONENT */}
                {showUserModal && (
                    <AddUser
                        onClose={() => setShowUserModal(false)}
                        teams={teams}
                        designations={designations}
                        onSave={async (userData) => {
                                try {
                                    await addUser(userData);

                                    setShowUserModal(false);
                                    await fetchUsers();

                                } catch (error) {
                                    console.error("Error adding user:", error);
                                }
                            }}
                                                />
                )}


                {showTeamModal && (
                    <AddTeam
                        onClose={() => setShowTeamModal(false)}
                        onSave={async (teamData) => {
                            try {
                                await addTeam(teamData);

                                setShowTeamModal(false);
                                await fetchTeams();

                            } catch (error) {
                                console.error("Error adding team:", error);
                            }
                        }}
                    />
                )}


                                {showDesignationModal && (
                                <AddDesignation
                                    onClose={() => setShowDesignationModal(false)}
                                                                            
                                        onSave={async (designationData) => {
                                            try {
                                                await addDesignation(designationData);

                                                setShowDesignationModal(false);
                                                await fetchDesignations();

                                            } catch (error) {
                                                console.error("Error adding designation:", error);
                                            }
                                        }}

                                />
                            )}

                            
                            {/* EMPLOYEE USER LIST TABLE */}

                            <div className="um-table-container">

                                <table className="um-table">

                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Employee ID</th>
                                            <th>Employee Name</th>
                                            <th>Email</th>
                                            <th>Team</th>
                                            <th>Designation</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {loading ? (
                                            <tr>
                                                <td colSpan="6">Loading users...</td>
                                            </tr>
                                        ) : users.length > 0 ? (

                                            users.map((user, index) => (
                                                <tr key={user.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{user.employeeId}</td>
                                                    <td>{user.employeeName}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.team || "-"}</td>
                                                    <td>{user.designation || "-"}</td>
                                                </tr>
                                            ))

                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="um-empty-message">
                                                    No users found
                                                </td>
                                            </tr>
                                        )}

                                    </tbody>

                                </table>

                            </div>


            </div>

        </MainLayout>
    );
}

export default UserManagement;
