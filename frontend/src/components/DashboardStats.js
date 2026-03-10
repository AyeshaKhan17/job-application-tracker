import React from "react";

function DashboardStats({ jobs, setStatusFilter, statusFilter }) {

    const total = jobs.length;
    const applied = jobs.filter(job => job.status === "Applied").length;
    const interview = jobs.filter(job => job.status === "Interview").length;
    const offer = jobs.filter(job => job.status === "Offer").length;
    const rejected = jobs.filter(job => job.status === "Rejected").length;

    const cardStyle = (filterName) =>
        `bg-white p-4 rounded-xl border cursor-pointer hover:bg-gray-50 transition
     ${statusFilter === filterName ? "border-2 border-black" : ""}`;

    return (<div className="grid grid-cols-5 gap-4 mb-6">

        <div
            onClick={() => setStatusFilter("All")}
            className={cardStyle("All")}
        >
            <p className="text-gray-500 text-sm">Total</p>
            <p className="text-2xl font-bold">{total}</p>
        </div>

        <div
            onClick={() => setStatusFilter("Applied")}
            className={cardStyle("Applied")}
        >
            <p className="text-gray-500 text-sm">Applied</p>
            <p className="text-2xl font-bold">{applied}</p>
        </div>

        <div
            onClick={() => setStatusFilter("Interview")}
            className={cardStyle("Interview")}
        >
            <p className="text-gray-500 text-sm">Interview</p>
            <p className="text-2xl font-bold">{interview}</p>
        </div>

        <div
            onClick={() => setStatusFilter("Offer")}
            className={cardStyle("Offer")}
        >
            <p className="text-gray-500 text-sm">Offer</p>
            <p className="text-2xl font-bold">{offer}</p>
        </div>

        <div
            onClick={() => setStatusFilter("Rejected")}
            className={cardStyle("Rejected")}
        >
            <p className="text-gray-500 text-sm">Rejected</p>
            <p className="text-2xl font-bold">{rejected}</p>
        </div>

    </div>

    );
}

export default DashboardStats;
