const express = require('express');
const app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  path = require('path'),
  port = 3000;

app.use(bodyParser.json());
app.use(cors());

// views engine setup
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

// Serve Static Files from / Style
let publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));

app.get('/',(req,res) =>
{
  res.render('nav')
})

app.get('/about',(req,res) =>
{
  res.render('about')
});



app.listen(port,() =>
{
  console.log(`server is listening on port ${port}`);
});
