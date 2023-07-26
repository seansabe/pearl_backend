const express = require("express");
const { searchListings } = require("../controllers/searchController");

const router = express.Router();

router.get("/", searchListings);

module.exports = router;
