import React, { useEffect, useState } from "react";
import axios from "axios";

function JobList() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        const res = await axios.get("http://localhost:5000/api/jobs");
        setJobs(res.data);
    };

    return (
        <div>
            <h2>Job Applications</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {jobs.map((job) => (
                        <tr key={job.id}>
                            <td>{job.company}</td>
                            <td>{job.position}</td>
                            <td>{job.status}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default JobList;