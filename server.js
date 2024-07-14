const express = require("express");
const dotenv = require("dotenv");
// Environment Variables
dotenv.config({
    path: "./config/env/config.env",
});

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res)=> {
    res.send("Hello QA API - Updated");
});
app.listen(PORT, () => {
    console.log("App Started on: " + PORT + ` Ortam: ${process.env.NODE_ENV}`);
});