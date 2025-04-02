const express = require("express");
const { getProcessLog } = require("../utils/logger");

const router = express.Router();

router.get("/", (req, res) => {
    getProcessLog();
    res.end();
    process.exit();
});

module.exports = router;