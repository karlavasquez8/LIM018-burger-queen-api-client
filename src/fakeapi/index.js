const dataProducts = require("./products.js")
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const secret = "EsUnSecreto"

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.use((req, res, next) => {
  console.log(req.headers.authorization)

  if (req.method === "POST" && req.path === "/auth") {
    next();
  } else if (req.headers.authorization === `Bearer ${secret}`) {
    next()
  } else {
    res.sendStatus(401)
  }

})


server.post('/auth', (req, res) => {

  if (
    req.body.email === 'mesera5@gmail.com' &&
    req.body.password === 'laloca123') {
    res.jsonp({
      token: secret
    })
  } else res.status(400).send('Bad Request')
})


// server.get('/products', (req, res) => {
//   res.jsonp({
//     products: dataProducts.products
//   })

// })
// para probar si esta corriendo el servidor

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})