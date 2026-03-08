import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import { useState } from "react";

function App() {

  const [refreshJobs, setRefreshJobs] = useState(false);

  const triggerRefresh = () => {
    setRefreshJobs(!refreshJobs);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="flex items-center gap-3 mb-8">

        <div className="text-3xl">💼</div>

        <h1 className="text-3xl font-bold">
          Job Application Tracker
        </h1>

        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <JobForm onJobAdded={triggerRefresh} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <JobList refreshJobs={refreshJobs} />
        </div>

      </div>

    </div>
  );
}

export default App;