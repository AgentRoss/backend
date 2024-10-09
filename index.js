require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
  res.send('hiteshdotcom')

})

app.get('/youtub', (req, res) =>{
  res.send("<h2>Chai toh bohot badhiya hai!</h2>")
})

app.get('/login', (req, res) =>{
  res.send('<h1>please login to chai aur code</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})