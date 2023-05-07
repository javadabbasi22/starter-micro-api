const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router("db.json")
var fs = require('fs');
fs.chmod("db.json",  0666, (err) => {
  if (err) throw err;
  console.log('The permissions for file "db.json" have been changed!');
}); 

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})
