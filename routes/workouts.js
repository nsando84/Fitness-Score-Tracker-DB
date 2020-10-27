const express = require('express')
const router = express.Router()
const db = require('../config/db')
const maleUnder30 = require('./charts')
const moment= require('moment')
const year = moment().format('YYYY')


router.get('/', (req,res) => {
    if (!req.query.name) {
        res.render('main')
    } else {
    const workouts = []
    console.log(req.query.name)
    db.getDb().db().collection('workoutdb')
    .find().forEach(cardio => {
        workouts.push(cardio)
    })
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'error loading page'});
      })
    }
})



router.post('/', (req,res) => {
    const convertedScore = maleUnder30(req.body.cardioTime, req.body.bodyComposition, req.body.pushUps, req.body.sitUps)
    const airManScore = {
        name: req.body.airmanName,
        cardio: convertedScore[0],
        body: convertedScore[1],
        pushups: convertedScore[2],
        situps: convertedScore[3],
        totalScore: convertedScore[0] + convertedScore[1] + convertedScore[2] + convertedScore[3],
        year: year
    }
    console.log(airManScore)
    db.getDb()
    .db()
    .collection('workoutdb')
    .insertOne(airManScore)
    .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'error occurred'});
    })
})







module.exports = router;