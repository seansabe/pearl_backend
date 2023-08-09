const express = require("express");
const router = express.Router();
const { searchServices } = require("../controllers/searchController");

router.get("/", searchServices);

module.exports = router;
