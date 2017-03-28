var express = require('express');
var router = express.Router();
const knex = require('../knex')
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hey');
  res.render('index');
});

router.post('/', function(req, res, next) {
  //getting req data from html form
  var user = req.body.username;
  console.log(user);
  if (user === '') {
    res.render('index', {
      error: "Dream on, dude. Enter a Name."
    });
  } else {
    knex('users')
          .where('name', user)
          .select()
          .then(data => {
            console.log(data);
            if (data.length === 0) {
              knex('users')
                .returning('id')
                .insert({
                  name: user
                }).then(id => {
                  console.log(id);
                }).catch(err => {
                  console.log(err);
                })
            }
          }).catch(err => {
            console.log(err);
          })

    res.redirect(`/users/${user}`)
  }
})

module.exports = router;
