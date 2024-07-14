const express = require("express");

const app = express();

const PORT = 3054;

app.get("/", (req, res)=> {
    res.send("Hello QA API - Updated");
});
app.listen(PORT, () => {
    console.log("App Started on: " + PORT);
});