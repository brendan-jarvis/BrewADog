const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const conn = knex(config[env])

function getRecipes(db = conn) {
  return db('recipes').select()
}

function addRecipe(beer, db = conn) {
  return db('recipes').insert(beer)
}

function getRecipe(id, db = conn) {
  return db('recipes').select().where('id', id).first()
}

function delRecipe(id, db = conn) {
  return db('recipes').del().where('id', id)
}

module.exports = { getRecipes, addRecipe, getRecipe, delRecipe }
