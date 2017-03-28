
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'cranberry maize', content: 'loop-de-lopp fruity poops', user_id: 2},
        {id: 2, title: 'skid ride', content: 'lots of sparks on my head', user_id: 1},
        {id: 3, title: 'i scream sundays', content: 'on sundays, i scream of i dream scrundays', user_id: 4},
        {id: 4, title: 'Panthers don\'t dream', content: 'except about catnip.', user_id: 3}
      ]);
    });
};
