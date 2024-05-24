const http = require("http");
const express = require("express");
const app = express();
module.exports = class Application {
  constructor() {
    this.configServer();
  }
  configServer() {
    app.get("/", (req, res) => {
      res.end("<h1>This is a Test</h1>");
    });
    const server = http.createServer(app);
    app.listen(3000, (err) => {
      if (err) console.log(err);
      console.log("server run on port 3000 ...");
    });
  }
};
