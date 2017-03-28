
exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.timestamp('date').notNullable().defaultTo(knex.raw('now()'));
    table.string('comment', 256).notNullable();
    table.integer('post_id').notNullable().references('id').inTable('posts').onDelete('CASCADE');
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
});
};

exports.down = function(knex) {
return knex.schema.dropTable('comments')
};
