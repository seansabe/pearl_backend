const User = require("../models/User");

exports.create = async (req, res) => {
  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getOne = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateOne = async (req, res) => {
  try {
    const updatedUser = await User.updateOne({ _id: req.params.id }, req.body);
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id });
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getOneByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: "User not found by email" });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
