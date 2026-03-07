import React, { useState } from "react";
import axios from "axios";

function JobForm() {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState("Applied");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const jobData = {
            company,
            position,
            status
        };

        try {
            await axios.post("http://localhost:5000/api/jobs", jobData);
            alert("Job added successfully");

            setCompany("");
            setPosition("");
            setStatus("Applied");

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Job</h2>

            <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
            />

            <br /><br />

            <input
                type="text"
                placeholder="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
            />

            <br /><br />

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option>Applied</option>
                <option>Interview</option>
                <option>Rejected</option>
                <option>Offer</option>
            </select>

            <br /><br />

            <button type="submit">Add Job</button>

        </form>
    );
}

export default JobForm;