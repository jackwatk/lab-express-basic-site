'use strict'
// set requires express
const express = require('express')

// routes from main js
const myRoutes = require('./routes/main')

// start app
const app = express()

const port = 3000

app.use(express.static('public'))
//middleware

app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
})

app.use('/', myRoutes);

app.get('*', (req, res) => res.send('404 error - page dont exist m8'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))