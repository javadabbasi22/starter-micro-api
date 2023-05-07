const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router("db.json")
// require fs (filesystem) module
const fs = require("fs");

// change permission of myFile.txt to 775
fs.chmod("db.json", 0o775, (error) => {
  // in-case of any errors
  if (error) {
    console.log(error,"55kk");
    return;
  }

  // do other stuff
  console.log("Permissions are changed for the file!");
}); 

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})
