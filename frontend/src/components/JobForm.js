import React, { useState } from "react";
import axios from "axios";

function JobForm({ onJobAdded }) {

    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Applied");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:5000/jobs", {
            company,
            role,
            status
        });

        setCompany("");
        setRole("");
        setStatus("Applied");

        onJobAdded();

    };

    return (<form onSubmit={handleSubmit} className="space-y-4">

        <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
                Company
            </label>

            <input
                type="text"
                placeholder="Enter company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                required
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
                Role
            </label>

            <input
                type="text"
                placeholder="Enter job role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                required
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
                Status
            </label>

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            >
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
            </select>
        </div>

        <button
            type="submit"
            className="w-full bg-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
            Add Job
        </button>

    </form>

    );
}

export default JobForm;
