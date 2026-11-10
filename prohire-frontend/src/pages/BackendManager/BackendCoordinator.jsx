import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import "../../css/BackendCoordinator.css";

function BackendCoordinator() {

    const [activeTab, setActiveTab] = useState("Yet To Allocate");

    const tabs = [
        "Yet To Allocate",
        "Allocated List",
        "Offer Released",
        "Offer Accepted",
        "Candidate Onboarded"
    ];

    return (
        <MainLayout>
            <div className="backend-coordinator-page">

                <div className="backend-page-header">
                    <div>
                        <h2>Backend Coordinator</h2>
                        <p>Manage hiring requests and candidate allocation.</p>
                    </div>

                    <button className="rfh-button">
                        + Create RFH
                    </button>
                </div>

                <div className="rfh-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={activeTab === tab ? "rfh-tab active" : "rfh-tab"}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="rfh-content">
                    <h3>{activeTab}</h3>
                    <p>{activeTab} records will appear here.</p>
                </div>

            </div>
        </MainLayout>
    );
}

export default BackendCoordinator;