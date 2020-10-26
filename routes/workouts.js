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
        res.render('main')

    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'error loading page'});
      })

})



router.post('/', (req,res) => {
    if (req.body.Type == 'cardio') {
    var convertedWorkout = {
        Date: req.body.Date,
        Type: req.body.Type,
        Name: req.body.Name,
        Distance: parseInt(req.body.Distance),
        Duration: parseInt(req.body.Duration)
    }
    } else {
        var convertedWorkout = {
            Date: req.body.Date,
            Type: req.body.Type,
            Name: req.body.Name,
            Reps: parseInt(req.body.Reps),
            Sets: parseInt(req.body.Sets),
            Weight: parseInt(req.body.Weight),
        }
    }

    db.getDb()
    .db()
    .collection('workouts')
    .insertOne(convertedWorkout)
    .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'error occurred'});
    })
})







module.exports = router;