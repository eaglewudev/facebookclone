var express = require('express');
var Post = require('../models/models').Post;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var post = new Post({
		post : 'test'
	})

	post.save(function(error, post){
		res.render('index', { title: 'Express' });
	})
  
});





module.exports = router;
