
const express = require("express");

const app = express();

const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to FoodCart!");
});

// Start server
app.listen(PORT, () => {
    console.log(`FoodCart server running at http://localhost:${PORT}`);
});
