const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000 ;
app.use(cors())

const chef = require('./data/data.json');

app.get('/', (req, res) => {
  res.send('Hello World!dadadadad')
})

app.get('/chefs', (req, res) => {
  console.log(chef);
    res.send(chef);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})