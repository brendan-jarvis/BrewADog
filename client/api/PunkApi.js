import request from 'superagent'

export async function getABeer() {
  try {
    const res = await request.get('https://api.punkapi.com/v2/beers/random')
    return res.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}
