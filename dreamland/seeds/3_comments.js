
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, comment: 'Wahchu Talkin bout Willis', post_id:1, user_id:3},
        {id: 2, comment: 'he was cold', post_id:2, user_id:4},
        {id: 3, comment: 'dairy intolerant', post_id:3, user_id:1},
        {id: 4, comment: 'something else', post_id:4, user_id:2}
      ]);
    });
};
