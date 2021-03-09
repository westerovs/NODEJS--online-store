// node app.js - run
const express = require('express')
const app     = express()

app.use(express.static('public')) // имя папки, где хранится статика
app.set('view engine', 'pug') // подключить pug

const mysql = require('mysql') // подключить mysql модуль

// connector - для обращ. к базе данных
const connector = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'market' // имя базы данных в WorkBench
})

// слушать порт по умолчанию
app.listen(3000, () => console.log('*** RUN SERVER ***'));

app.get('/', (req, res) => {
    connector.query('SELECT * FROM goods', (error, result) => {
        if (error) throw error;

        let goods = {}
        // перепаковка массива
        for (let i = 0; i < result.length; i++) {
            goods[result[i]['id']] = result[i];
        }

        // render в html
        res.render('main.pug', {
            name  : 'Alexander 777',
            course: 'Node.js ля ля ля',
            goods: JSON.parse(JSON.stringify(goods))
        })
    })
})
