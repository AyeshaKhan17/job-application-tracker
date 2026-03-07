const express = require("express");
const pool = require("./config/db");
require("dotenv").config();

const jobRoutes = require("./routes/jobRoutes");

const app = express();

app.use(express.json());

app.use("/jobs", jobRoutes);

app.get("/", async (req, res) => {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});