const express = require('express');
const app = express();
const axios = require("axios")
const gameOfThrones = require('./routes/gameofthrones')
const pokemon = require('./routes/pokemon')
const gameOfThronesAPI = require('./gameofthrones.json')

const port = 5000;


app.use('/game-of-thrones', gameOfThrones)
app.use('/pokemon',pokemon)


app.listen(port, () => {
  console.log(port)
})