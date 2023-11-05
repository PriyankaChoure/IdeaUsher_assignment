const express = require("express");
const router = express.Router();

// Route for post
const postRoute = require("./post.route");
router.use("/post", postRoute);

module.exports = router;
