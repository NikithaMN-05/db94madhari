var express = require('express');
var router = express.Router();
var icecream_controlers= require('../controllers/icecream')
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");}
/* GET home page. */
router.get('/', icecream_controlers.icecream_view_all_Page );


/* GET detail icecream page */
router.get('/detail', icecream_controlers.icecream_view_one_Page);

/* GET create icecream page */
router.get('/create',secured, icecream_controlers.icecream_create_Page);

/* GET create update page */
router.get('/update',secured, icecream_controlers.icecream_update_Page);

/* GET create Icecream page */
router.get('/delete',secured, icecream_controlers.icecream_delete_Page);
module.exports = router;
