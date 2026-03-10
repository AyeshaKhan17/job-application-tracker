import React, { useState } from "react";
import Modal from "react-modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import KanbanBoardPage from "./pages/KanbanBoardPage";

Modal.setAppElement("#root");

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [refreshJobs, setRefreshJobs] = useState(false);

  const handleJobAdded = () => {
    setRefreshJobs((currentValue) => !currentValue);
    setIsOpen(false);
  };

  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-gray-50">
        <Header openModal={() => setIsOpen(true)} />
        <div className="flex flex-1">
          <Sidebar />

          <div className="flex-1 p-8">

            <Routes>
              <Route path="/" element={<JobList refreshJobs={refreshJobs} />} />
              <Route
                path="/board"
                element={<KanbanBoardPage refreshJobs={refreshJobs} />}
              />
            </Routes>
          </div>
        </div>

        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          className="mx-auto mt-32 w-full max-w-lg rounded-xl bg-white p-8 shadow-lg"
          overlayClassName="fixed inset-0 flex items-start justify-center bg-black/30 p-4"
        >
          <h2 className="mb-4 text-xl font-semibold">Add Job Application</h2>

          <JobForm onJobAdded={handleJobAdded} />
        </Modal>
      </div>
    </Router>
  );
}

export default App;
