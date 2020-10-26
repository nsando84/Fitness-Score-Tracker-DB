const express = require('express')
const router = express.Router()
const db = require('../config/db')


router.get('/', (req,res) => {
    
    const workouts = []
    db.getDb().db().collection('cardio')
    .find().forEach(cardio => {
        workouts.push(cardio)
    })
    .then(() => {
        res.render('main', { workouts })

    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'error loading page'});
      })

})



router.post('/', async (req,res) => {
    console.log()
    // try {
    // const savedPost = await post.save()
    // res.json(savedPost)
    // }catch(err){
    //     res.json({ message: err })
    // }
})







module.exports = router;