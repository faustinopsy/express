exports.getSorteDoDia = () => {
    const valor = Math.floor(Math.random()*sorte.length)
    return sorte[valor]
}

const sorte=[
    'você ganhou 10 milhões na mega sena',
    'você ganhou 1 milhão e meio na lotofácil',
    'você dividiu o premio principal da lotofácil com 1 pessoa',
    'você dividiu o premio principal da mega sena com 3 pessoas'
]