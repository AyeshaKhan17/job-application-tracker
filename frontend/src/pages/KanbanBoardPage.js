import React, { useEffect, useState } from "react";
import axios from "axios";
import KanbanBoard from "../components/KanbanBoard";

function KanbanBoardPage({ refreshJobs }) {

    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        const res = await axios.get("http://localhost:5000/jobs");
        setJobs(res.data);
    };

    useEffect(() => {
        fetchJobs();
    }, [refreshJobs]);

    return (

        <div>

            <h2 className="text-xl font-semibold mb-4">
                Board View
            </h2>

            <KanbanBoard
                jobs={jobs}
                refresh={fetchJobs}
            />

        </div>

    );
}

export default KanbanBoardPage;
