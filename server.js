require("dotenv").config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const UsersController = require('./routes/UsersController')
mongoose.promise = global.Promise

// create a new express app
const app = express()

// Connect to MongoDB and set up message for when 
// Mongo connects successfully or errors out
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection

connection.on ('error', (err) => {
    console.log("Mongoose default connection error: " + err)
})

connection.on ('connected', () => {
    console.log("Mongoose Connected Successfully")
})



// inject middleware
app.use(express.static(`${__dirname}/client/build`))
app.use(bodyParser.json())

// Start adding routes
app.use('/api/users', UsersController)


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})



// set app to listen on port 3000
const PORT = process.env.PORT || 3001 
app.listen(PORT, () => {
    console.log("App listening on ", PORT)
})