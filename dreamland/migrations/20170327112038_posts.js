
exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.string('content', 256).notNullable();
    table.timestamp('date').notNullable().defaultTo(knex.raw('now()'));
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
return knex.schema.dropTable('posts')
};
