const express = require('express')
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

// app.get('/',(req , res) => res.render('home'))
app.get('/',(req , res) => {
    const sorteDoDia = sorte[Math.floor(Math.random()*sorte.length)]
    res.render('home', {sorte: sorteDoDia})
})

app.get('/sobre',(req , res) => res.render('sobre'))

app.use((req , res) => {
    res.status(404)
    res.render('404')
})

app.use((req , res) => {
    res.status(500)
    res.render('500')
})

const sorte=[
    'você ganhou 10 milhões na mega sena',
    'você ganhou 1 milhão e meio na lotofácil',
    'você dividiu o premio principal da lotofácil com 1 pessoa',
    'você dividiu o premio principal da mega sena com 3 pessoas'
]

app.listen(port, () => console.log(`Express inicado em http://localhost:${port}` 
+ ' Precione Ctrl+c para encerrar'))