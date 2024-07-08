const express = require("express");

const users = [
    {
        id: 1,
        name: "Gün Uluutku",
        place: "İzmir",
    },
    {
        id: 2,
        name: "Ali Rıza",
        place: "İstanbul",
    }
]

const app = express();

// Get Request
// localhost:500/user
app.get("/users", (req, res, next) => {
    res.json(users);
});

const PORT = 500;

app.listen(PORT, () => {
    console.log("Server Started: " + PORT);
});