// Write your Code Here
const express = require("express");
(router = express.Router()), (routeBase = "/home");

router.get("/home", (req, res) => {
  res.sendFile(__dirname + "../home.html");
});
