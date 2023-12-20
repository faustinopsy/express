const rotas = require('../lib/rotas')

test('página inicial', () =>{
    const req = {}
    const res = { render: jest.fn() }
    rotas.home(req, res)
    expect(res.render.mock.calls[0][0]).toBe('home')
})
test('página sobre', () =>{
    const req = {}
    const res = { render: jest.fn() }
    rotas.sobre(req, res)
    expect(res.render.mock.calls[0][0]).toBe('sobre')
})
test('página 404', () =>{
    const req = {}
    const res = { render: jest.fn() }
    rotas.notfound(req, res)
    expect(res.render.mock.calls[0][0]).toBe('404')
})