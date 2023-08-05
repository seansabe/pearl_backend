const express = require("express");
const bookingController = require("../controllers/BookingController");
const router = express.Router();

router.post("/", bookingController.createBooking);
router.get("/", bookingController.getBookings);
router.get("/:id", bookingController.getBooking);
router.put("/:id", bookingController.updateBooking);
router.delete("/:id", bookingController.deleteBooking);
router.get("/user/:id", bookingController.getBookingsByUser);
router.get("/user/upcoming/:id", bookingController.getUpcomingBookingsByUser);
router.get("/service/:id", bookingController.getBookingsByService);
router.get("/service/upcoming/:id", bookingController.getUpcomingBookingsByService);
router.get("/service/past/:id", bookingController.getPastBookingsByService);


module.exports = router;
