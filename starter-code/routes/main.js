'use strict'

const express = require('express');
const router = express.Router();



router.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
router.get('/about', (req, res) => res.send('about'))


router.get('/photos', (req, res) => res.sendFile(__dirname + '/views/photos.html'))

module.exports = router;