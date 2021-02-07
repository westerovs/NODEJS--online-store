// node app.js - run

const express = require('express')
const app     = express()

app.use(express.static('public')) // имя папки, где хранится статика
app.set('view engine', 'pug') // подключить pug

// подключить mysql модуль
const mysql = require('mysql')
// настроить модуль, connector - для обращ. к базе данных
const con   = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'root',
    database: 'market'
})

// слушать порт по умолчанию
app.listen(3000, () => console.log('*** RUN SERVER ***'));

app.get('/', (req, res) => {
    con.query('SELECT * FROM goods', (error, result) => {
        if (error) throw error;

        let goods = {}
        // перепаковка массива
        for (let i = 0; i < result.length; i++) {
            goods[result[i]['id']] = result[i];
        }

        // render в html
        res.render('main.pug', {
            name  : 'Alexander',
            course: 'Node.js',
            goods: JSON.parse(JSON.stringify(goods))
        })
    })
})
