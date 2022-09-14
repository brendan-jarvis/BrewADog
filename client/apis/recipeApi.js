import request from 'superagent'

export async function getRecipesApi() {
  const req = await request.get('/api/v1/recipes')
  return req.body
}

export async function addRecipeApi(beer) {
  const req = await request.post('/api/v1/recipes').send(beer)
  return req.body
}

export async function delRecipeApi(id) {
  const req = await request.delete('/api/v1/recipes/' + id)
  return req.body
}
