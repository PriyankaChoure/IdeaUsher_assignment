const express = require("express");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
//const routes = require("./routes/");
const app = express();

app.use(cors());
app.options("*", cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

app.get("/", (req, res) => {
  res.send("Server is running");
});
//app.use("/backend", routes);

module.exports = app;
