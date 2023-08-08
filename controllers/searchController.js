const Service = require("../models/Service");

exports.searchServices = async (req, res) => {
  try {
    const keyword = req.query.search;
    const results = await Service.find({
      name: { $regex: keyword, $options: "i" },
    });
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
