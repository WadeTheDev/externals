const express = require('express');
const app = express();
const axios = require("axios")

app.get('/all', async (req, res) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
    res.json(response.data.results)
    console.log(response.data);
})

app.get('/:id', async (req, res) =>{
    const { id } = req.params
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemonId = Number(id)
        res.json(response.data)
        
    } catch (error) {
        res.status(error.response.status).send(error.response.data)
    }
})


module.exports = app
