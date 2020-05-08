const express = require('express');
const app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  port = 3000;
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
  res.send("hello");
});

app.use(bodyParser.json());
app.use(cors());

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home/home.html');
});
app.get('/home', (res, req) => {
  res.render('home.css');
});
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
