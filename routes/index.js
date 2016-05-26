const express = require('express');
const router = express.Router();
const mongo = require('mongodb')
const db = require('monk')('localhost/nodeblog')

// Homepage Blog Posts
router.get('/', function(req, res, next) {
  const db = req.db
  const posts = db.get('posts')
  posts.find({},{}, (err, posts) => {
    // making posts accessible in view file
    res.render('index', { "posts": posts })
  })
});

module.exports = router;
