require("dotenv").config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.promise = global.Promise

// create a new express app
const app = express()

// Connect to MongoDB and set up message for when 
// Mongo
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection

connection.on ('error', (err) => {
    console.log("Mongoose default connection error: " + err)
})

connection.on ('connected', () => {
    console.log("Mongoose Connected Successfully")
})



// inject middleware
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World!")
})

// set app to listen on port 3000
const PORT = process.env.PORT || 3000 
app.listen(PORT, () => {
    console.log("App listening on ", PORT)
})