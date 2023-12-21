const sorteDoDia = require('./sorte')

exports.home = (req , res) => res.render('home', {sorte: sorteDoDia.getSorteDoDia()})

exports.sobre = (req , res) => res.render('sobre')

exports.contato = (req , res) => res.render('contato')

const produtos =[
    {id:1, nome: 'chá verde', preco:3.50},
    {id:2, nome: 'castanha', preco:5.50},
    {id:3, nome: 'mel', preco:13},
    {id:4, nome: 'água', preco:1.50},
]
exports.getProdutos =('/api/produtos/',(req, res) =>{
    res.json(produtos)
})
exports.getProdutosId =('/api/produtos/:id',(req, res) =>{
    const p = produtos.find(p => p.id === parseInt(req.params.id))
    if(!p) return res.status(404).json({error: "O produto não existe"})
    res.json(p)
})


exports.notfound = (req , res) => res.render('404')

exports.serverError = (err, req , res, next) => res.render('500')
