const pool = require("../config/db");

const getJobs = async () => {
    const result = await pool.query("SELECT * FROM jobs ORDER BY id DESC");
    return result.rows;
};

const createJob = async (company, role, status) => {
    const result = await pool.query(
        "INSERT INTO jobs (company, role, status) VALUES ($1,$2,$3) RETURNING *",
        [company, role, status]
    );
    return result.rows[0];
};

const updateJob = async (id, status) => {
    const result = await pool.query(
        "UPDATE jobs SET status=$1 WHERE id=$2 RETURNING *",
        [status, id]
    );
    return result.rows[0];
};

const deleteJob = async (id) => {
    await pool.query("DELETE FROM jobs WHERE id=$1", [id]);
};

module.exports = {
    getJobs,
    createJob,
    updateJob,
    deleteJob
};