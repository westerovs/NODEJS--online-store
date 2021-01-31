console.log('*** RUN SERVER ***')

const http = require('http')

http.createServer((request, response) => {
    if (request.url === '/') response.end('MAIN')
    else if (request.url === '/xxx') response.end('xxx site')

}).listen(3000)















