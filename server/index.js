// Create express app
const express = require("express")
const app = express()
const cors = require('cors')

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
app.get("/track_experiment", (req, res) => {
    const experiment = req.query.experiment;
    const variant = req.query.variant;
    const event = req.query.event;
    console.log(experiment, variant, event);
    res.json({"message":"Ok"})
})

// 404 not found for other requests
app.use(function(req, res){
    res.status(404);
});
