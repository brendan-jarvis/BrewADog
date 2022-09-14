/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([
    {
      id: 1,
      brewdog_id: '113',
      name: 'Hello My Name Is Ingrid',
      created_at: '1663143230740',
      brewed: 'true',
    },
    {
      id: 2,
      brewdog_id: '137',
      name: 'Sink The Bismarck!',
      created_at: '1663144230740',
      brewed: 'true',
    },
    {
      id: 3,
      brewdog_id: '258',
      name: 'Paradox Rye',
      created_at: '1663143030740',
      brewed: 'false',
    },
  ])
}
