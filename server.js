const express = require("express");
const app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  port = 3000;
app.get("/", (req, res) => {
  res.send("hello");
});

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
