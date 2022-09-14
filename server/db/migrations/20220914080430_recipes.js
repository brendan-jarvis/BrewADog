/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id').primary()
    table.integer('brewdog_id')
    table.string('name')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.boolean('brewed').defaultTo(false)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('recipes')
}
