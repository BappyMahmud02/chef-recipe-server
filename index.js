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
app.get('/chefs/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const chefs = chef.find((c) => c.id == id) ;
  console.log(chefs);
  res.send(chefs)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})