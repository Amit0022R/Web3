const express = require('express') // CommonJS syntax
// import express from 'express' // ES6 import syntax
require('dotenv').config()
const app = express()

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World! AMit')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter! AMit')
})

app.get('/logout', (req, res) => {
    res.send('<h1>Logout successfully</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
