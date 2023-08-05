const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    let booking = await newBooking.save();
    res.status(201).send(booking);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getBookings = async (req, res) => {
  try {
    let bookings = await Booking.find();
    res.status(200).send(bookings);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getBookingsByUser = async (req, res) => {
  try {
    let bookings = await Booking.find({ userId: req.params.id });
    res.status(200).send(bookings);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getUpcomingBookingsByUser = async (req, res) => {
  try {
    let bookings = await Booking.find({
      user: req.params.id,
      date: { $gte: new Date() },
    });
    res.status(200).send(bookings);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getBookingsByService = async (req, res) => {
  try {
    let bookings = await Booking.find({ serviceId: req.params.id });
    res.status(200).send(bookings);
  } catch (err) {
    res.status(400).send(err);
  }
};



exports.getUpcomingBookingsByService = async (req, res) => {
  try {
    let bookings = await Booking.find({
      serviceId: req.params.id,
      date: { $gte: new Date() },
    });
    res.status(200).send(bookings);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getPastBookingsByService = async (req, res) => {
  try {
    let bookings = await Booking.find({
      serviceId: req.params.id,
      date: { $lt: new Date() },
    });
    res.status(200).send(bookings);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getBooking = async (req, res) => {
  try {
    let booking = await Booking.findOne({ _id: req.params.id });
    if (!booking) return res.status(404).send("Booking not found");
    res.status(200).send(booking);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateBooking = async (req, res) => {
  try {
    let updatedBooking = await Booking.updateOne(
      { _id: req.params.id },
      req.body
    );
    if (!updatedBooking) return res.status(404).send("Booking not found");
    res.status(200).send(updatedBooking);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    let bookingToDelete = await Booking.deleteOne({ _id: req.params.id });
    if (!bookingToDelete) return res.status(404).send("Booking not found");
    res.status(200).send(bookingToDelete);
  } catch (err) {
    res.status(400).send(err);
  }
};
