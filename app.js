// node app.js - run
const express = require('express')
const app = express()

// public - имя папки, где хранится статика
app.use(express.static('public'))

// слушать порт по умолчанию
app.listen(3000, () => {
    console.log('*** RUN SERVER ***')
})

app.get('/xxx', (req, res) => {
    console.log('load /')
    res.render('index.html')
})

