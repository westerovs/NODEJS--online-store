const http = require('http') // подключить модуль 'http'
const fs   = require('fs')   // подключить модуль fs

http.createServer() // запустить модуль

http.createServer((request, response) => {
    response.end('HELLO !!!')
}).listen(3000)

// запуск дебагера
// DEBUG=express:router node app.js























