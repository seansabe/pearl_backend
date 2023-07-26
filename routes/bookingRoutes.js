const express = require("express");
const bookingController = require("../controllers/bookingController");
const router = express.Router();

router.post("/", bookingController.createBooking);
router.get("/", bookingController.getBookings);
router.get("/:id", bookingController.getBooking);
router.patch("/:id", bookingController.updateBooking);
router.delete("/:id", bookingController.deleteBooking);

module.exports = router;
