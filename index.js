const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000

function serverStatic(res, path, contentType, responseCode=200){
    fs.readFile(__dirname + path,(err, data) => {
        if(err){
            res.writeHead(500,{ 'content-Type':'text/html'})
            return res.end('500 - erro interno')
        }
        res.writeHead(responseCode,{ 'content-Type':contentType})
        res.end(data)
    })
}

const server = http.createServer((req, res) =>{
    //remover a querystring e a barra final e colocando tudo em minúscula
    const path = req.url.replace(/\/(?:\?.*)?$/, '').toLocaleLowerCase()
    switch(path){
        case '':
            serverStatic(res, '/public/index.html','text/html')
        break
        case '/contato':
            serverStatic(res, '/public/contato.html','text/html')
        break
        case '/sobre':
            serverStatic(res, '/public/sobre.html','text/html')
        break
        default :
            serverStatic(res, '/public/404.html','text/html',404)
        break
    }
   
})

server.listen(port, ()=> console.log(`servidor iniciado na porta ${port};` + 'precione Ctrl+C para terminar...'))