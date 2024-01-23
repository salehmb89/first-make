const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', (req, res) => {
  res.send('Hello World From Express')
})

app.listen(port, () => {
  console.log(`mike app listening on port ${port}`)
})