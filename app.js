// node app.js - run
const express = require('express')
const app = express()
// const pug = require('pug')

// public - имя папки, где хранится статика
app.use(express.static('public'))
app.set('view engine', 'pug') // подключить pug


// слушать порт по умолчанию
app.listen(3000, () => console.log('*** RUN SERVER ***'))
app.get('/pug', (req, res) => res.render('main.pug'))

