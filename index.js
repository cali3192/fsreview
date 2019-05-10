const express = require('express')
const parser = require('body-parser')
const routes = require('./routes.js')

const app = express()

app.use(express.static(__dirname))
app.use(parser.json())

app.use('/todos', routes)

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

// server function runs -> index.js
// router converts intent into action
// controller aka. request handler runs
// model functions invoked
//   model function resolves
//     response is sent to the client
