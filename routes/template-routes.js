const express = require('express');
const router = express.Router();


router.get("/hello", (req, res) => {
    res.send("hello, from the earth");
});

module.exports = router;