const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome home sanitarium')
    }
    if(req.url === '/The-pits') {
        res.end('Home for the deeply disturbed')
    }
    res.end(`
        <h1>The curse of the Demiourge is upon you</h1>
        <p>All those who found these place stand still, yet never rest</p>
        <a href="/">Back to the sanitarium</a>
    `) 
})

server.listen(5000)