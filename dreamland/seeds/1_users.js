
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Garrick'},
        {id: 2, name: 'Kevin'},
        {id: 3, name: 'Panther'},
        {id: 4, name: 'Emily'}
      ]);
    });
};
