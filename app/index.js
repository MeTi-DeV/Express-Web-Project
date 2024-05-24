const path = require("path");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
module.exports = class Application {
  constructor() {
    this.configServer();
    this.setConfig();
    this.setRoutes();
  }
  configServer() {
    app.listen(3000, (err) => {
      if (err) console.log(err);
      console.log("server run on port 3000 ...");
    });
  }
  setConfig() {
    app.use(express.static(path.join(__dirname, "public")));
    console.log(path.join(__dirname, "resource/views"));
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "resource/views"));
    app.use(expressLayouts);
    app.set("layout", "master");
    app.set("layout extractScripts", true);
    app.set("layout extractStyles", true);
  }
  setRoutes() {
    app.get("/", (req, res) => {
      res.render("index");
    });
  }
};
