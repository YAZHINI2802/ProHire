import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>Pro Hire</h2>
      </div>

      <nav className="sidebar-menu">

        <NavLink to="/users">
          User List
        </NavLink>

        {/* <NavLink to="/teams">
          Team Master
        </NavLink>

        <NavLink to="/designations">
          Designation Master
        </NavLink> */}

      </nav>

      <div className="sidebar-footer">
        <button onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}>
          Logout
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;