var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    projects: [{
      image: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3410318/1162/776/m1/fpnw/wm0/1-.jpg?1508027464&s=423375e6a847fd2714d4d8a97c708206',
      title: 'TerbiumBot',
      description: 'An Advanced, Modern and Powerful Telegram Bot.',
      link: 'https://t.me/terbiumbot'
    }]
  });
});

module.exports = router;
