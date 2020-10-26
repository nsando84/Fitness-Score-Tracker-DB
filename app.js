const express = require('express')
const app = express()
const db = require('./config/db');
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayouts: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))



app.use('/', require('./routes/workouts'))


db.initDb((err, db ) => {
    if (err) {
      console.log(err)
    } else {
        app.listen(8000, () => {
            console.log('listening on 8000')
        })
    }
  })