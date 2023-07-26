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

const mongoose = require("mongoose");

// remember to use your own connection string in the following line
const connectionString =
  "mongodb+srv://pearl:pearl@pearl.rty8o1j.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const app = express();
const PORT = 5001; // You can use any available port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Login endpoint
app.use(loginRoutes);

//  Database endpoints
app.use("/user", userRoutes);
app.use("/professional", professionalRoutes);
app.use("/service", serviceRoutes);
app.use("/review", reviewRoutes);
app.use("/booking", bookingRoutes);
app.use("/api/search", searchRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
