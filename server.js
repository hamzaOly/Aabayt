const express = require('express');
const app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    home = require('./src/routes/home'),
    // abbuabout = require('./src/routes/abbuabout'),
    port = 3000;

////////////////////////
app.use(bodyParser.json());
app.use(cors());

// views engine setup
app.set('views',path.join(__dirname,'src/template/views'));
app.set('view engine','ejs');
let stylePath = path.join(__dirname,'/src/style/mdb');
let slickPath = path.join(__dirname,'/src/style/slick');
let imagesPath = path.join(__dirname,'/src/images');
app.use(express.static("src"));
app.use(express.static("template"));
app.use(express.static(stylePath));
app.use(express.static(slickPath));
app.use(express.static(imagesPath));





// index page 
app.get('/',(req,res) =>
{
    res.render('index');
});
app.get('/en',(req,res) =>
{
    res.render('index');
});
app.get('/ar',(req,res) =>
{
    res.render('index');
});

// Pages Routes

app.use(home);
// app.use(abbuabout);
// app.use(academic);
// app.use(center);
// app.use(important);
// app.use(researsh);
// app.use(student);

app.listen(port,() => { console.log(`server is listening on port ${port}`) });