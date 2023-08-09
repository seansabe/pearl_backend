const express = require("express");
const router = express.Router();
const { searchServices } = require("../controllers/SearchController");

router.get("/", searchServices);

module.exports = router;
