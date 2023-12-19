const express = require('express')
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000;

app.get('/',(req , res) => res.render('home'))

app.get('/sobre',(req , res) => res.render('sobre'))

app.use((req , res) => {
    res.status(404)
    res.render('404')
})

app.use((req , res) => {
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(`Express inicado em http://localhost:${port}` 
+ ' Precione Ctrl+c para encerrar'))