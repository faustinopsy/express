const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) =>{
    res.writeHead(200,{ 'content-Type':'text/plain'})
    res.end('ola mundo!')
})

server.listen(port, ()=> console.log(`servidor iniciado na porta ${port};` + 'precione Ctrl+C para terminar'))