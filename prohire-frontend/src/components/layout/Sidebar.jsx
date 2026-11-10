import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/layout/Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">

            {/* <div className="sidebar-logo">
                <h2>ProHire</h2>
            </div> */}

            <nav className="sidebar-menu">

                <NavLink
                    to="/backend-coordinator"
                    className={({ isActive }) =>
                        isActive ? "sidebar-link active" : "sidebar-link"
                    }
                >
                    Backend Coordinator
                </NavLink>

                <NavLink
                    to="/user-management"
                    className={({ isActive }) =>
                        isActive ? "sidebar-link active" : "sidebar-link"
                    }
                >
                    User Management
                </NavLink>

            </nav>

        </aside>
    );
}

export default Sidebar;