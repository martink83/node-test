const http = require('http')  
const port = 80

const requestHandler = (request, response) => {  
  console.log('Log [' + Date.now() + '] - ' + request.url)
  response.end('Hellosss Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port} !!!!!`)
})
