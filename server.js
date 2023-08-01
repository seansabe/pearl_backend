const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const loginRoutes = require("./routes/loginRoutes");
const userRoutes = require("./routes/userRoutes");
const professionalRoutes = require("./routes/professionalRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const searchRoutes = require("./routes/searchRoutes");
const process = require('process');
const mongoose = require("mongoose");
const connection = require("./utils/connection")
mongoose
  .connect(connection.atlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const app = express();
const port = process.env.PORT || 5001; // You can use any available port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Login endpoint
app.use(loginRoutes);

//  Database endpoints
app.use("/api/user", userRoutes);
app.use("/professional", professionalRoutes);
app.use("/api/service", serviceRoutes);
app.use("/review", reviewRoutes);
app.use("/booking", bookingRoutes);
app.use("/api/search", searchRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
