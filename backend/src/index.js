const mongoose = require("mongoose");
const app = require("./app");
//const dbConfig = require("./config/dbconfig");
const config = require("./config/config");
const PORT = 8082;
let server;

mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.log("Connected to Mongodb");
    server = app.listen(config.port, () => {
      console.log("listing to port", config.port);
    });
  })
  .catch();
