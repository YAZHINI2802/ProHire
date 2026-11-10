import React, { useState } from "react";
import { FaBell, FaUserCircle, FaChevronDown } from "react-icons/fa";
import "../../css/layout/Header.css";

function Header() {

    const [showProfile, setShowProfile] = useState(false);

    return (
        <header className="main-header">

            <div className="header-brand">
                <div className="brand-logo">P</div>

                <div className="brand-details">
                    <h2>ProHire</h2>
                    <p>Recruitment Workspace</p>
                </div>
            </div>

            <div className="header-actions">

                <span className="user-role">Backend Manager</span>

                <button className="notification-btn">
                    <FaBell />
                </button>

                <div className="header-profile">

                    <button
                        className="profile-btn"
                        onClick={() => setShowProfile(!showProfile)}
                    >
                        <FaUserCircle />
                        <FaChevronDown />
                    </button>

                    {showProfile && (
                        <div className="profile-dropdown">
                            <button>My Profile</button>
                            <button>Logout</button>
                        </div>
                    )}

                </div>

            </div>

        </header>
    );
}

export default Header;