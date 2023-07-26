const Professional = require("../models/Professional");

const create = async (req, res) => {
  const newProfessional = new Professional(req.body);
  try {
    console.log("Inside create function", req.body);
    const savedProfessional = await newProfessional.save();
    res.status(201).json(savedProfessional);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAll = async (req, res) => {
  try {
    const professionals = await Professional.find();
    res.status(200).json(professionals);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getOne = async (req, res) => {
  try {
    const professional = await Professional.findById(req.params.id);
    if (professional) {
      res.status(200).json(professional);
    } else {
      res.status(404).json({ message: "Professional not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateOne = async (req, res) => {
  try {
    const updatedProfessional = await Professional.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    if (updatedProfessional.matchedCount == 1) {
      res
        .status(200)
        .json({ message: "Professional found and updated successfully" });
    } else {
      res.status(400).json({ message: "No matching professional found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const deletedProfessional = await Professional.deleteOne({
      _id: req.params.id,
    });
    if (deletedProfessional.deletedCount == 1) {
      res.status(200).json({ message: "Professional deleted successfully" });
    } else {
      res.status(400).json({ message: "Professional not deleted" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};
