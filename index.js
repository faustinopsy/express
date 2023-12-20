const express = require('express')
const { engine } = require('express-handlebars');
const rotas = require('./lib/rotas')
const app = express();

app.engine('handlebars', engine({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

app.get('/',rotas.home)

app.get('/sobre',rotas.sobre)

app.use(rotas.notfound)

app.use(rotas.serverError)


if(require.main === module){
    app.listen(port, () => {
    console.log(`Express inicado em http://localhost:${port}` + 
    ' Precione Ctrl+c para encerrar')
    })
} else{
    module.exports = app
}
