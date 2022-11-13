const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PropertyModel = require("./models/Property");
const bodyParser = require("body-parser");
const propertyRouter = require("./routes/propertiesRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoDBUrl = process.env.MONGODB_URL;
// const mongoDBUrl = "mongodb+srv://adrob1983:Lam1910@book-vacation-cluster.vqjxuoh.mongodb.net/bookVacDB?retryWrites=true&w=majority";

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongodb connection error;"));

// property routes
app.use("/property", propertyRouter);

// user routes
app.use("/user", userRouter);

app.get("/test", (req, res) => {
  res.json("hitting the route");
});

app.listen(3001, () => console.log("Server is running!"));
