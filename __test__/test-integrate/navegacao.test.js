const portfinder = require('portfinder')
const puppeteer  = require('puppeteer')

const app = require('../../index')

let server = null
let port = null

beforeEach(async () => {
    port = await portfinder.getPortPromise()
    server = app.listen(port)
})

afterEach(() => {
    server.close()
})

test('link página inicial para página sobre', async () =>{
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage()
    await page.goto(`http://localhost:${port}`)
    await Promise.all([
        page.waitForNavigation(),
        page.click('[data-test-id="sobre"]'),
    ])
    expect(page.url()).toBe(`http://localhost:${port}/sobre`)
    await browser.close()
})