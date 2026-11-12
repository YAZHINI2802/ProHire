
import React from "react";
import { CircleX } from "lucide-react";
import "../../css/UserManagement/AddTeam.css";

function AddTeam({ onClose, onSave }) {

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const teamData = {
            teamName: formData.get("teamName")
        };

        onSave(teamData);
    };

    return (
        <div className="um-modal-overlay">
            <div className="um-modal">

                <div className="um-modal-header">
                    <h3>Add Team</h3>

                    <button
                        type="button"
                        className="um-close-btn"
                        onClick={onClose}
                    >
                        <CircleX size={22} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="um-form-group">
                        <label>Team Name</label>

                        <input
                            type="text"
                            name="teamName"
                            placeholder="Enter Team Name"
                            required
                        />
                    </div>

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
                            Add Team
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default AddTeam;
