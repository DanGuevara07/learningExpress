const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(201)
  res.send('Hello World!!, Esta página es respuesta a una solicitud GET')
})

app.post('/', (req, res) => {
    res.status(201)
    res.send('Se recibio una solicitud POST')
  })

app.put('/', (req, res) => {
    res.status(201)
    res.send('Se recibio una solicitud PUT')
})

app.delete('/', (req, res) => {
    res.status(201)
    res.send('Se recibio una solicitud DELETE')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})