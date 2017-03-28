var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users')
});


router.get('/:name', function(req, res, next) {
    knex('users')
        .where('name', req.params.name)
        .select('id')
        .then(id => {
            id = id[0].id
            knex('posts')
              .join('comments', 'posts.id', '=', 'comments.post_id')
              .where('comments.user_id', id)
                .then(data => {
                  var content = data[0].content;
                  var comment = data[0].comment;
                    var title = data[0].title;
                    res.render('users', {
                        name: req.params.name,
                        title: title,
                        content: content,
                        comment: comment
                    });
                })
        })
    // res.render('users', {
    //   name: req.params.name
    // });
})


// router.get('/:name', function(req, res, next) {
//     knex('users')
//         .where('name', req.params.name)
//         .select('id')
//         .then(id => {
//             id = id[0].id
//             knex('posts')
//                 .where('user_id', id)
//                 .returning(['title', 'content', 'comment'])
//                 .then(data => {
//                     var content = data[0].content;
//                     var title = data[0].title;
//                     res.render('users', {
//                         name: req.params.name,
//                         title: title,
//                         content: content
//                     });
//                 })
//         })
//     // res.render('users', {
//     //   name: req.params.name
//     // });
// })

module.exports = router;
