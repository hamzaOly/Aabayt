const express = require('express');
const app = express();
const router = express.Router();
const routeBase = '/abbuabout';
//////////////////////////////////
//about page
router.get(routeBase , function(req, res) {
    res.render('about');
});
/////////////////////////////////////////
//about UniversityAdministration page
router.get(routeBase +'/UniversityAdministration', function(req, res) {
    res.render('University_Administration');
});
////////////////////////////
//BoardOfTrustees page
router.get(routeBase +'/BoardOfTrustees', function(req, res) {
    res.render('BoardOfTrustees');
});
/////////////////////////////////
//DeansCouncil page
router.get(routeBase +'/DeansCouncil', function(req, res) {
    res.render('DeansCouncil');
});
////////////////////////////////////
//general_information page
router.get(routeBase +'/general_information', function(req, res) {
    res.render('general_information');
});
module.exports = router;
