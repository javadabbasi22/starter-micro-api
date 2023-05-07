const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router("db.json")
var fs = require('fs');
fs.writeFile("db.json", (error) => {
    //Since this code executes as root the file being created is read only.
    //chmod() it
    fs.chmod("db.json", 0666, (error) => {
      console.log('Changed file permissions');
    });
});

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})
