const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const app = express();
module.exports = class Application {
  constructor() {
    this.configServer();
    this.configDatabase();
    this.setConfig();
    this.setRoutes();
  }
  configServer() {
    app.listen(3000, (err) => {
      if (err) console.log(err);
      console.log("server run on port 3000 ...");
    });
  }
  async configDatabase() {
    await mongoose.connect("mongodb://localhost:27017/test");
  }
  setConfig() {
    app.use(express.static(path.join(__dirname, "public")));
    console.log(path.join(__dirname, "resource/views"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "resource/views"));
    app.use(expressLayouts);
    app.set("layout", "master");
    app.set("layout extractScripts", true);
    app.set("layout extractStyles", true);
  }
  setRoutes() {
    app.use(require("./routes"));
  }
};
