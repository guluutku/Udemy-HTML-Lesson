const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers/index");

// Environment Variables
dotenv.config({
    path: "./config/env/config.env",
});

const app = express();

const PORT = process.env.PORT;

// Routers Middleware
app.use("/api", routers);

app.listen(PORT, () => {
    console.log("App Started on: " + PORT + ` Ortam: ${process.env.NODE_ENV}`);
});