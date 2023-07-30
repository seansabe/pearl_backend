const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

// Route to create a new user
router.post("/", UserController.create);

// Route to get all users
router.get("/", UserController.getAll);

// Route to get one user by id
router.get("/:id", UserController.getOne);

// Route to get one user by email
router.get("/:email", UserController.getOneByEmail);

// Route to update a user by id
router.patch("/:id", UserController.updateOne);

// Route to update a user by email
// router.patch("/:email", UserController.updateOneByEmail);

// Route to delete a user by id
router.delete("/:id", UserController.deleteOne);

module.exports = router;
