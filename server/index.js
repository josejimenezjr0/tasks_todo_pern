require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT

const app = express()

app.use(express.static(__dirname + '/../build'));


app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`)
} )