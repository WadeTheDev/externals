const express = require('express');
const app = express();
const gameOfThronesAPI = require('../gameofthrones.json')
const axios = require("axios")

// 01
app.get('/json', async (req, res) => {
    res.json(gameOfThronesAPI)
})
//02
app.get('/url', async (req, res) => {
    const response = await axios.get('https://thronesapi.com/api/v2/Characters')
    res.json(response.data)
})


module.exports = app


