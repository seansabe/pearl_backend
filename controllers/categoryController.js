const Service = require("../models/Service");

exports.filterByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const results = await Service.find({ kindOfService: category });
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
