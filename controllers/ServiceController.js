const mongoose = require("mongoose");
const Service = require("../models/Service");

exports.createService = async (req, res) => {
  const service = new Service(req.body);
  try {
    const newService = await service.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getServicesByUser = async (req, res) => {
  try {
    const services = await Service.find({ userId: req.params.id });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getService = async (req, res) => {
  try {
    const service = await Service.findOne({ _id: req.params.id });
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const updatedService = await Service.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    if (updatedService.modifiedCount == 0) {
      return res.status(400).json({ message: "Service not updated" });
    }
    res.status(200).json({ message: "Service updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const deletedService = await Service.deleteOne({ _id: req.params.id });
    if (deletedService.deletedCount == 0) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
