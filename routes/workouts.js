const express = require('express')
const router = express.Router()
const db = require('../config/db')
const maleUnder30 = require('./charts')
const moment = require('moment')
const year = moment().format('YYYY')


// load page or get chart on search//

router.get('/', (req,res) => {
    if (!req.query.name) {
        res.render('main')
    } else {
    db.getDb().db().collection('workoutdb')
    .findOne({name: req.query.name})
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'error loading page'});
      })
    }
})


// add new report //

router.post('/', (req,res) => {
    const convertedScore = maleUnder30(req.body.cardioTime, req.body.bodyComposition, req.body.pushUps, req.body.sitUps)
        let cardio = convertedScore[0]
        let body = convertedScore[1]
        let pushups = convertedScore[2]
        let situps = convertedScore[3]
        let totalScore = convertedScore[0] + convertedScore[1] + convertedScore[2] + convertedScore[3]

    db.getDb()
    .db()
    .collection('workoutdb')
    .findOne({name: req.body.airmanName})
    .then(result => {
        if (!result) {
            db.getDb()
                .db()
                .collection('workoutdb')
                .insertOne({name: req.body.airmanName, fitness: [{'2020': {cardio: cardio, body: body, pushups: pushups, situps: situps, totatScore: totalScore}}]})
                .then(() => {
                    res.sendStatus(200);
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({ message: 'error occurred'});
                }) 
        } else {
            db.getDb()
                .db()
                .collection('workoutdb')
                .findOne({_id: result._id})
                .then(result => {
                    if (result.fitness[0].hasOwnProperty(year)) {
                        res.send('alreadytested')
                    } else {
                        db.getDb()
                        .db()
                        .collection('workoutdb')
                        .updateOne({name: req.body.airmanName},{$push: {fitness: {'2020': {cardio: cardio, body: body, pushups: pushups, situps: situps, totatScore: totalScore}}}})
                        .then(() => {
                            console.log('then then then')
                            res.sendStatus(200);
                        })
                        .catch(err => {
                            console.log(err)
                            res.status(500).json({ message: 'error occurred'});
                        }) 
                    }     
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({ message: 'error occurred'});
                }) 
        }
    })  
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'error occurred'});
    })
})







module.exports = router;