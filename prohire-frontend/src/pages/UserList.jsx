import React, { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom"; 
import "../css/UserList.css";

const API_URL = "http://localhost:8080/api";

function UserList() {

    const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [designations, setDesignations] = useState([]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    employeeName: "",
    email: "",
    teamId: "",
    designationId: "",
  });

  // Fetch users, teams and designations
  useEffect(() => {
    fetchUsers();
    fetchTeams();
    fetchDesignations();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchTeams = async () => {
    try {
      const response = await axios.get(`${API_URL}/teams`);
      setTeams(response.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  const fetchDesignations = async () => {
    try {
      const response = await axios.get(`${API_URL}/designations`);
      setDesignations(response.data);
    } catch (error) {
      console.error("Error fetching designations:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add user
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}/users`, {
        employeeName: formData.employeeName,
        email: formData.email,
        teamId: Number(formData.teamId),
        designationId: Number(formData.designationId),
      });

      alert("User created successfully!");

      setFormData({
        employeeName: "",
        email: "",
        teamId: "",
        designationId: "",
      });

      setShowForm(false);
      fetchUsers();
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user");
    }
  };

  // Search users
  const filteredUsers = users.filter((user) =>
    `${user.employeeName} ${user.username} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <MainLayout title="User List">
      <div className="user-list-page">

        {/* Page Header */}
        <div className="user-page-header">
  <div>
    <h2>User Management</h2>
    <p>Manage employees and their access details.</p>
  </div>

  <div className="user-header-actions">

    <button
      className="master-btn"
      onClick={() => navigate("/teams")}
    >
      Team 
    </button>

    <button
      className="master-btn"
      onClick={() => navigate("/designations")}
    >
      Designation 
    </button>

    <button
      className="add-user-btn"
      onClick={() => setShowForm(true)}
    >
      + Add User
    </button>

  </div>
</div>

       

        {/* Add User Form */}
        {showForm && (
          <div className="user-form-card">
            <h3>Create New User</h3>

            <form onSubmit={handleSubmit}>
              <div className="user-form-grid">

                <div className="form-group">
                  <label>Employee Name</label>
                  <input
                    type="text"
                    name="employeeName"
                    value={formData.employeeName}
                    onChange={handleChange}
                    placeholder="Enter employee name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Employee Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter employee email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Team</label>
                  <select
                    name="teamId"
                    value={formData.teamId}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Team</option>

                    {teams.map((team) => (
                      <option key={team.id} value={team.id}>
                        {team.teamName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Designation</label>
                  <select
                    name="designationId"
                    value={formData.designationId}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Designation</option>

                    {designations.map((designation) => (
                      <option
                        key={designation.id}
                        value={designation.id}
                      >
                        {designation.designationName}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="save-btn">
                  Create User
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Search */}
        <div className="user-search-section">
          <input
            type="text"
            placeholder="Search employee, username or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* User Table */}
        <div className="user-table-card">
          <table className="user-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Team</th>
                <th>Designation</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="no-data">
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.employeeCode || "-"}</td>
                    <td>{user.employeeName}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.teamName}</td>
                    <td>{user.designationName}</td>

                    <td>
                      <span className="status-active">
                        {user.status || "Active"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </MainLayout>
  );
}

export default UserList;