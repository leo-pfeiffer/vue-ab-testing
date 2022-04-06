// Create express app
const express = require("express")
const app = express()
const cors = require('cors')

const db = require("./database.js")

app.use(cors())

// Server port
const PORT = 5555;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// A/B testing endpoint
app.post("/track_experiment", (req, res) => {
    const experiment = req.query.experiment;
    const variant = req.query.variant;
    const event = req.query.event;

    if (experiment === null || variant === null || event === null) {
        res.status(400);
        return;
    }

    // Insert into database
    const sql = 'INSERT INTO experiment (name, variant, event) VALUES (?, ?, ?)'
    const params = [experiment, variant, event];

    db.run(sql, params, function (error, result) {
        if (error){
            res.status(400).json({"error": error.message})
            return;
        }
        res.json({
            "message": "success",
            "data": params,
            "id" : this.lastID
        })
    })
})

// 404 not found for other requests
app.use(function(req, res){
    res.status(404);
});
