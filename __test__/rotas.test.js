const rotas = require('../lib/rotas')

test('página inicial', () =>{
    const req = {}
    const res = { render: jest.fn() }
    rotas.home(req, res)
    expect(res.render.mock.lenght).toBe(undefined)
    expect(res.render.mock.calls[0][0]).toBe('home')
})
test('página sobre', () =>{
    const req = {}
    const res = { render: jest.fn() }
    rotas.sobre(req, res)
    expect(res.render.mock.lenght).toBe(undefined)
    expect(res.render.mock.calls[0][0]).toBe('sobre')
})
test('página 404', () =>{
    const req = {}
    const res = { render: jest.fn() }
    rotas.notfound(req, res)
    expect(res.render.mock.lenght).toBe(undefined)
    expect(res.render.mock.calls[0][0]).toBe('404')
})
test('página 500', () =>{
    const err = new Error('erro interno')
    const req = {}
    const res = { render: jest.fn() }
    const next = jest.fn()
    rotas.notfound(req, res)
    rotas.serverError( err, req, res, next)
    expect(res.render.mock.lenght).toBe(undefined)
    expect(res.render.mock.calls[0][0]).toBe('500')
})