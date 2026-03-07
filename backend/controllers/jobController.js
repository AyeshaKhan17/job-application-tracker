const jobModel = require("../models/jobModel");

const getAllJobs = async (req, res) => {
    const jobs = await jobModel.getJobs();
    res.json(jobs);
};

const createJob = async (req, res) => {
    const { company, role, status } = req.body;

    const job = await jobModel.createJob(company, role, status);

    res.json(job);
};

const updateJob = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const job = await jobModel.updateJob(id, status);

    res.json(job);
};

const deleteJob = async (req, res) => {
    const { id } = req.params;

    await jobModel.deleteJob(id);

    res.json({ message: "Job deleted" });
};

module.exports = {
    getAllJobs,
    createJob,
    updateJob,
    deleteJob
};