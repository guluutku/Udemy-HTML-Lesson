const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers/index");
const connectDatabase = require("./helpers/database/connectDatabase");

// Environment Variables
dotenv.config({
    path: "./config/env/config.env",
});

// MongoDB Connect
connectDatabase();

const app = express();

const PORT = process.env.PORT;

// Routers Middleware
app.use("/api", routers);

app.listen(PORT, () => {
    console.log("App Started on: " + PORT + ` Ortam: ${process.env.NODE_ENV}`);
});