
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../../css/layout/MainLayout.css";

function MainLayout({ children }) {
    return (
        <div className="main-layout">

            <Header />

            <div className="main-layout-content">

                <Sidebar />

                <main className="page-content">
                    {children}
                </main>

            </div>

        </div>
    );
}

export default MainLayout;
