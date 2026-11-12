
import React from "react";
import { CircleX } from "lucide-react";
import "../../css/UserManagement/AddUser.css";

function AddUser({ onClose, teams = [], designations = [], onSave }) {

    // Form Submit Function
    const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const userData = {
        employeeId: formData.get("employeeId"),
        employeeName: formData.get("employeeName"),
        email: formData.get("email"),
        team: formData.get("team"),
        designation: formData.get("designation")
    };

    await onSave(userData);
};

        

    return (
        <div className="um-modal-overlay">

            <div className="um-modal">

                {/* MODAL HEADER */}
                <div className="um-modal-header">

                    <h3>Add User</h3>

                    <button
                        type="button"
                        className="um-close-btn"
                        onClick={onClose}
                    >
                        <CircleX size={22} />
                    </button>

                </div>

                {/* USER FORM */}
                <form
                    className="um-user-form"
                    onSubmit={handleSubmit}
                >

                    {/* EMPLOYEE ID */}
                    <div className="um-form-group">

                        <label>Employee ID</label>

                        <input
                            type="text"
                            name="employeeId"
                            placeholder="Enter Employee ID"
                            required
                        />

                    </div>

                    {/* EMPLOYEE NAME */}
                    <div className="um-form-group">

                        <label>Employee Name</label>

                        <input
                            type="text"
                            name="employeeName"
                            placeholder="Enter Employee Name"
                            required
                        />

                    </div>

                    {/* EMAIL */}
                    <div className="um-form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email Address"
                            required
                        />

                    </div>

                    {/* TEAM DROPDOWN */}
                    <div className="um-form-group">

                        <label>Team</label>

                        <select
                            name="team"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select Team
                            </option>

                            {teams.map((team) => (
                                <option
                                    key={team.id}
                                    value={team.teamName}
                                >
                                    {team.teamName}
                                </option>
                            ))}

                        </select>

                    </div>

                    {/* DESIGNATION DROPDOWN */}
                    <div className="um-form-group">

                        <label>Designation</label>

                        <select
                            name="designation"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select Designation
                            </option>

                            {designations.map((designation) => (
                                <option
                                    key={designation.id}
                                    value={designation.designationName}
                                >
                                    {designation.designationName}
                                </option>
                            ))}

                        </select>

                    </div>

                    {/* FORM BUTTONS */}
                    <div className="um-form-actions">

                        <button
                            type="button"
                            className="um-cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="um-save-btn"
                        >
                            Add User
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default AddUser;
