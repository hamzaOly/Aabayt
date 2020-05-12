const express = require('express');
const app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    port = 3000;

app.use(bodyParser.json());
app.use(cors());


// views engine setup
let stylePath = path.join(__dirname,'/src/style');
app.set('views',path.join(__dirname,'/src/views'));
app.set('view engine','ejs');
app.use(express.static("src"));
app.use(express.static(stylePath));

// index page 
app.get('/',function (req,res)
{
    res.render('index');
});
app.get('/hhh',function (req,res)
{
    res.render('index');
});


app.get('/home',function (req,res)
{
    res.render('footer');
});
// Pages Routes
// app.use(academic);
// app.use(center);
// app.use(home);
// app.use(important);
// app.use(researsh);
// app.use(student);



app.listen(port,() => { console.log(`server is listening on port ${port}`) });