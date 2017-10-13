const express = require('express')
const router = express.Router()
const { User } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
    const users = await User.find({})
    // it's just going to send json instead of sending a string of handlebars
    res.json(users)
    } catch (err) {
        res.send(err)
    }
})  

router.get('/:id', async (req, res) => {
    try {
        //Mongoose method of fidning byId
    const user = await User.findById(req.params.id)
    // it's just going to send json instead of sending a string of handlebars
    res.json(user)
    } catch (err) {
        res.send(err)
    }
})  

router.post('/', async (req, res) => {
    try{
    // here we create a new instance the user
    const newUser = new User(req.body.user) 
    // but user isn't saved until we hit newUser.save
    const saved = await newUser.save()

    res.json(saved)
    } catch (err) {
        res.send(err)
    }    
})


module.exports = router