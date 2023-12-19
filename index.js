const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) =>{
    //remover a querystring e a barra final e colocando tudo em minúscula
    const path = req.url.replace(/\/(?:\?.*)?$/, '').toLocaleLowerCase()
    switch(path){
        case '':
            res.writeHead(200,{ 'content-Type':'text/html'})
            res.end('home')
        break
        case '/contato':
            res.writeHead(200,{ 'content-Type':'text/html'})
            res.end('contato')
        break
        case '/sobre':
            res.writeHead(200,{ 'content-Type':'text/html'})
            res.end('sobre')
        break
        default :
            res.writeHead(404,{ 'content-Type':'text/html'})
            res.end('error')
        break
    }
   
})

server.listen(port, ()=> console.log(`servidor iniciado na porta ${port};` + 'precione Ctrl+C para terminar...'))