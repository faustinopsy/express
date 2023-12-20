const sorteDoDia = require('./sorte')

exports.home = (req , res) => res.render('home', {sorte: sorteDoDia.getSorteDoDia()})

exports.sobre = (req , res) => res.render('sobre')

exports.notfound = (req , res) => res.render('404')

exports.serverError = (err, req , res, next) => res.render('500')
