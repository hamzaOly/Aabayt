const express = require('express');
const app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  path = require('path'),
  port = 3000;

app.use(bodyParser.json());
app.use(cors());

// views engine setup

app.set('views',path.join(__dirname,'views'));

// Serve Static Files from / Style
let publicPath = path.join(__dirname,'public');
app.set('view engine','pug');
app.use(express.static(publicPath));

app.get('/',(req,res) =>
{
  res.render('nav')
})


app.get('/about',(req,res) =>
{
  res.render('about',{
    title: "Hi"
  })
});
app.get('/info',(req,res) =>
{
  res.render('info')
});



app.listen(port,() =>
{
  console.log(`server is listening on port ${port}`);
});
