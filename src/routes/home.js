const
    express = require("express"),
    router = express.Router(),
    routeBase = '/home';



router.get('/home',(req,res) =>
{
    res.render('home');
});



module.exports = router;