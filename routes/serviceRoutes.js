const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/ServiceController");
const { filterByCategory } = require("../controllers/CategoryController");

router.post("/", serviceController.createService);

router.get("/", serviceController.getAllServices);

router.get("/:id", serviceController.getService);

router.get("/user/:id", serviceController.getServicesByUser);

router.patch("/:id", serviceController.updateService);

router.delete("/:id", serviceController.deleteService);

router.get("/category/:category", filterByCategory);

module.exports = router;
