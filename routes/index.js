var express = require('express');
var router = express.Router();
var Product = require('../models/product');

// sessions, safty: 
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function (req, res){
  
  //connect to db, and sending data to front-end
  Product.find(function(err, docs){
    var productChunks = [];
    var chunk = 3;
    for(let i = 0; i<docs.length; i+=chunk){
      productChunks.push(docs.slice(i, i+chunk));
    }
    res.render('shop/index', {title: 'LandingShop', products: productChunks})
  });

});

/* GET signup page. */
router.get('/user/signup', function(req, res){
  res.render('user/signup', {csrfToken: req.csrfToken()});
});

/* POST signup page. */
router.post('/user/signup', function(req, res){
  res.redirect('/');
})


module.exports = router;
