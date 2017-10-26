var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function (req, res, next){
  
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

module.exports = router;
