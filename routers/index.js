const express = require("express");
const question = require("./question");
const auth = require("./auth");

const router = express.Router();

router.get("/", (req, res,) => {
    res.send("Home Page");
});

router.use("/questions", question);
router.use("/auth", auth);

module.exports = router;