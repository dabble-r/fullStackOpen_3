const http = require('http')
const express = require('express')
const app = express()

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "5",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!!!</h1>')
  console.log(response)
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
  
})



const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)