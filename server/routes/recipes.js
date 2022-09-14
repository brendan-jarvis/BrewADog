const express = require('express')
const router = express.Router()
const db = require('../db/connection')

// GET /api/v1/
router.get('/', async (req, res) => {
  try {
    // res.json()
    const beer = await db.getRecipes()
    res.json(beer)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body
    const beerId = await db.addRecipe(data)
    const getBeer = await db.getRecipe(beerId[0])
    res.json(getBeer)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const beerId = req.params.id
    await db.delRecipe(beerId)
    const beers = db.getRecipes()
    res.json(beers)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
