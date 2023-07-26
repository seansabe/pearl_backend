const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/ServiceController");

router.post("/", serviceController.createService);

router.get("/", serviceController.getAllServices);

router.get("/:id", serviceController.getService);

router.patch("/:id", serviceController.updateService);

router.delete("/:id", serviceController.deleteService);

module.exports = router;
