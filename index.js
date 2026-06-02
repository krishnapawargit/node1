const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Successfully lived and deployed my first node.js project using jenkins and pm2 BY:-- One And Only KRISHNA PAWAR </h1>')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
