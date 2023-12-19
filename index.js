const express = require('express')

const app= express()

const port = process.eventNames.PORT || 3000

app.get('/',(req , res) => {
    res.type('text/plain')
    res.status(200)
    res.send('Página inicial')
})

app.get('/sobre',(req , res) => {
    res.type('text/plain')
    res.status(200)
    res.send('Página sobre')
})

app.use((req , res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - not found')
})

app.use((req , res) => {
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => console.log(`Express inicado em http://localhost:${port}` 
+ ' Precione Ctrl+c para encerrar'))