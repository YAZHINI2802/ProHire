
import React from "react";
import { CircleX } from "lucide-react";
import "../../css/UserManagement/AddDesignation.css";

function AddDesignation({ onClose, onSave }) {

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const designationData = {
            designationName: formData.get("designationName")
        };

        onSave(designationData);
    };

    return (
        <div className="um-modal-overlay">
            <div className="um-modal">

                <div className="um-modal-header">
                    <h3>Add Designation</h3>

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
                        <label>Designation Name</label>

                        <input
                            type="text"
                            name="designationName"
                            placeholder="Enter Designation Name"
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
                            Add Designation
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}

export default AddDesignation;
