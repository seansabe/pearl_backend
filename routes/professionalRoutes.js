const express = require("express");
const ProfessionalController = require("../controllers/ProfessionalController");
const router = express.Router();

router.post("/", ProfessionalController.create);
router.get("/", ProfessionalController.getAll);
router.get("/:id", ProfessionalController.getOne);
router.patch("/:id", ProfessionalController.updateOne);
router.delete("/:id", ProfessionalController.deleteOne);

module.exports = router;
