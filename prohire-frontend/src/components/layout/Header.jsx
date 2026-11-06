import React from "react";
import "../../css/Header.css";

function Header({ title }) {
  return (
    <header className="header">

      <div className="header-title">
        <h2>{title}</h2>
      </div>

      <div className="header-profile">
        <div className="profile-avatar">A</div>

        <div className="profile-info">
          <span>Admin</span>
          <small>Administrator</small>
        </div>
      </div>

    </header>
  );
}

export default Header;