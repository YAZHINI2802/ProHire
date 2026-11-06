import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../../css/MainLayout.css";

function MainLayout({ title, children }) {
  return (
    <div className="main-layout">

      <Sidebar />

      <div className="main-content">

        <Header title={title} />

        <div className="page-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default MainLayout;