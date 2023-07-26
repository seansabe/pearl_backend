const Service = require("../models/Service");

const searchListings = async (req, res) => {
  const searchWord = req.query.search;

  try {
    const services = await Service.find({
      $text: {
        $search: searchWord,
      },
    });
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  searchListings,
};
