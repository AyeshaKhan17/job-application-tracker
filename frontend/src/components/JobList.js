import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardStats from "./DashboardStats";
import { Building, Briefcase, Calendar, Link, User } from "lucide-react";

function JobList({ refreshJobs }) {

const [jobs, setJobs] = useState([]);

useEffect(() => {
fetchJobs();
}, [refreshJobs]);

const fetchJobs = async () => {
const res = await axios.get("http://localhost:5000/jobs");
setJobs(res.data);
};

const deleteJob = async (id) => {
try {
await axios.delete(`http://localhost:5000/jobs/${id}`);
fetchJobs();
} catch (error) {
console.error(error);
}
};

const updateStatus = async (id, newStatus) => {
try {
await axios.put(`http://localhost:5000/jobs/${id}`, {
status: newStatus
});


  fetchJobs();
} catch (error) {
  console.error(error);
}


};

const renderStatus = (status) => {


switch (status) {

  case "Applied":
    return (
      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
        Applied
      </span>
    );

  case "Interview":
    return (
      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
        Interview
      </span>
    );

  case "Offer":
    return (
      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">
        Offer
      </span>
    );

  case "Rejected":
    return (
      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
        Rejected
      </span>
    );

  default:
    return status;
}


};

return ( <div>


  <DashboardStats jobs={jobs} />

  <div className="mb-4">
    <span className="bg-gray-200 px-4 py-1 rounded-full text-sm">
      Applications History
    </span>
  </div>

  <div className="bg-white rounded-xl shadow-sm border p-4">

    <table className="w-full text-sm">

      <thead className="text-gray-500 border-b">

        <tr>

          <th className="p-3 text-left">
            <Building className="inline w-4 mr-2" />
            Company
          </th>

          <th className="p-3 text-left">
            <Briefcase className="inline w-4 mr-2" />
            Role
          </th>

          <th className="p-3 text-left">
            Status
          </th>

          <th className="p-3 text-left">
            <Calendar className="inline w-4 mr-2" />
            Applied Date
          </th>

          <th className="p-3 text-left">
            <Link className="inline w-4 mr-2" />
            Website
          </th>

          <th className="p-3 text-left">
            <User className="inline w-4 mr-2" />
            Contact
          </th>

          <th className="p-3 text-left">
            Actions
          </th>

        </tr>

      </thead>

      <tbody>

        {jobs.map((job) => (

          <tr key={job.id} className="border-b hover:bg-gray-50 transition">

            <td className="p-3 font-medium">
              {job.company}
            </td>

            <td className="p-3">
              {job.role}
            </td>

            <td className="p-3">

              <div className="flex items-center gap-2">

                {renderStatus(job.status)}

                <select
                  className="border rounded px-2 py-1 text-xs"
                  value={job.status}
                  onChange={(e) => updateStatus(job.id, e.target.value)}
                >
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>

              </div>

            </td>

            <td className="p-3 text-gray-500">
              —
            </td>

            <td className="p-3 text-blue-600 underline">
              —
            </td>

            <td className="p-3 text-gray-500">
              —
            </td>

            <td className="p-3">

              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => deleteJob(job.id)}
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>

);
}

export default JobList;
