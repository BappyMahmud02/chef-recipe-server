const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
app.use(cors())

const data = require('./data/data.json');

app.get('/', (req, res) => {
  res.send('Hello World!dadadadad')
})

app.get('/chefs', (req, res) => {
  console.log(data);
    res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})